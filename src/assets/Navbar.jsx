import { Link } from "react-router-dom";

function Navbar({ cart = [] }) {
  const token = localStorage.getItem("token");

  let userEmail = "";

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      userEmail = payload.email;
    } catch (err) {}
  }

  function handleLogout() {
    localStorage.removeItem("token");
    alert("Logged out");
    window.location.reload();
  }

  return (
    <nav style={styles.nav}>
      <h2 style={{ color: "#2c3e50" }}>🛒 E-Shop</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>

        {token ? (
          <>
            <span style={{ color: "green" }}>👤 {userEmail}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#f8f9fa",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
};

export default Navbar;