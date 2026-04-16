function Cart({ cart, setCart }) {
  function increase(id) {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  }

  function decrease(id) {
    setCart(
      cart
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  }

  function remove(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={styles.container}>
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 && <h3>Your cart is empty 😢</h3>}

      {cart.map(item => (
        <div key={item.id} style={styles.card}>
          <img src={item.img} style={styles.img} />

          <div>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>

            <div>
              <button onClick={() => decrease(item.id)}>-</button>
              <span style={{ margin: "10px" }}>{item.qty}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>

            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  card: {
    display: "flex",
    gap: "20px",
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
    alignItems: "center",
  },
  img: {
    width: "100px",
  },
};

export default Cart;