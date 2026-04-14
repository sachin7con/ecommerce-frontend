function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.img} alt={product.title} width="150" />

      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    width: "200px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default ProductCard;