function Cart({ cart, setCart }) {

  function decreaseQuantity(id) {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);

    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );

    setCart(updatedCart);
  }

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function totalPrice() {
    return cart.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <h3>Your cart is empty 😢</h3>
      )}

      {/* Cart Items */}
      {cart.map((item) => (
        <div key={item.id} style={styles.card}>

          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            style={styles.image}
          />

          {/* Details */}
          <div style={styles.details}>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>

            {/* Quantity Controls */}
            <div style={styles.controls}>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span>{item.qty}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.id)}
              style={styles.remove}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Total */}
      {cart.length > 0 && (
        <h2 style={styles.total}>
          Total: ₹{totalPrice()}
        </h2>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
  },
  card: {
    display: "flex",
    gap: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  details: {
    flex: 1,
  },
  controls: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    margin: "10px 0",
  },
  remove: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  total: {
    marginTop: "20px",
  },
};

export default Cart;