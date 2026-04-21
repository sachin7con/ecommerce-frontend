import { Link } from "react-router-dom";

function Home() {
  const categories = ["Electronics", "Fashion", "Accessories"];

  return (
    <div>
      {/* HERO */}
      <div style={styles.hero}>
        <h1>Welcome to E-Shop</h1>
        <p>Best deals on top products 🔥</p>
        <Link to="/product">
          <button>Shop Now</button>
        </Link>
      </div>

      {/* CATEGORIES */}
      <div style={styles.section}>
        <h2>Categories</h2>
        <div style={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} style={styles.card}>
              <h3>{cat}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div style={styles.section}>
        <h2>Featured Products</h2>
        <div style={styles.grid}>
          <div style={styles.card}>iPhone</div>
          <div style={styles.card}>Shoes</div>
          <div style={styles.card}>Headphones</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "40px",
    background: "#f5f5f5",
  },
  section: {
    padding: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default Home;