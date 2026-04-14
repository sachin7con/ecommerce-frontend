import {Link } from "react-router-dom";
function Navbar({ cart = [] }){
    // Check login state
    const token = localStorage.getItem("token");

    const userEmail = "";

    if(token){
      try{
        const payload = JSON.parse(atob(token.split(".")[1]));
        userEmail = payload.email;
      }catch(error){
        console.log("Invalid Token")
      }
    }

    function handleLogout() {
        localStorage.removeItem("token");
        alert("Logged out successfully");
        window.location.reload();
    }

    return(
        <>
        <nav style={styles.nav}>
        <h2>E-shop</h2>

        <div>
            <Link style={{color: "white"}} to="/" >Home</Link> | {" "}
            <Link to="/product">Product</Link> |{" "}
            <Link to="/cart" >Cart ({cart ? cart.length : 0})</Link> |{" "}

            {token && (
              <span style={styles.user}>Welcome, {userEmail}</span>
            )}

            {token ? (<button onClick={handleLogout} style={styles.btn}>Logout</button>)
            : (<><Link to="/login">Login</Link> | {" "}
            <Link to="/register">Regsiter</Link> </>)}
            
        </div>


        </nav>
        </>
    )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#222",
    color: "#fff",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  user: {
    color: "#00ffcc",
    fontWeight: "bold",
  },
  btn: {
    padding: "6px 12px",
    border: "none",
    background: "#ff4d4d",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Navbar;