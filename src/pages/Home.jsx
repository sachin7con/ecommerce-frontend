function Home() {
  return (
    <div style={styles.hero}>
      <h1>Welcome to E-Shop 🛍️</h1>
      <p>Best deals on electronics & fashion</p>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "50px",
    background: "#3498db",
    color: "white",
  },
};

export default Home;