import axios from "axios";

function Cart({ cart, setCart }) {
  // Existing logic
  function increase(id) {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  }

  function decrease(id) {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item).filter(item => item.qty > 0));
  }

  function remove(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // --- NEW PAYMENT LOGIC ---
  const handlePayment = async () => {
    try {
      // 1. Create Order on Backend
      const { data: order } = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: total,
      });

      // 2. Configure Razorpay Options
      const options = {
        key: "rzp_test_SlZmJN3XFDFzwi", // Your test key
        amount: order.amount,
        currency: order.currency,
        name: "My E-Kart",
        description: "Purchase Description",
        order_id: order.id,
        handler: async function (response) {
          // 3. Verify Payment
          const { data } = await axios.post("http://localhost:5000/api/payment/verify", response);
          if (data.success) {
            alert("Payment Successful!");
            setCart([]); // Clear cart
          }
        },
        prefill: {
          name: "Guest User",
          email: "user@example.com",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed", error);
      alert("Error: Check if backend is running on port 5000");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Shopping Cart</h2>
      {cart.length === 0 && <h3>Your cart is empty 😢</h3>}

      {cart.map(item => (
        <div key={item.id} style={styles.card}>
          <img src={item.img} style={styles.img} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <div>
              <button onClick={() => decrease(item.id)}>-</button>
              <span style={{ margin: "10px" }}>{item.qty}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
            <button onClick={() => remove(item.id)} style={styles.removeBtn}>Remove</button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={styles.summary}>
          <h2>Total: ₹{total}</h2>
          <button onClick={handlePayment} style={styles.checkoutBtn}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  card: { display: "flex", gap: "20px", border: "1px solid #ddd", padding: "15px", marginBottom: "10px", borderRadius: "10px", alignItems: "center" },
  img: { width: "100px" },
  summary: { marginTop: "30px", borderTop: "2px solid #eee", paddingTop: "20px" },
  checkoutBtn: { backgroundColor: "#28a745", color: "white", padding: "12px 25px", border: "none", borderRadius: "5px", fontSize: "1.1rem", cursor: "pointer" },
  removeBtn: { marginTop: "10px", color: "red", cursor: "pointer", border: "none", background: "none" }
};

export default Cart;
