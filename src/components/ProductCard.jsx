function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.img} alt={product.title} style={styles.img} />
      <h3>{product.title}</h3>
      <p style={{ color: "green" }}>₹{product.price}</p>

      <button onClick={() => addToCart(product)} style={styles.btn}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  img: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
  },
  btn: {
    background: "#3498db",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductCard;