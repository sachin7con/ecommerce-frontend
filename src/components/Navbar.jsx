import {Link } from "react-router-dom";
function Navbar({ cart = [] }){
    // Check login state
    const token = localStorage.getItem("token");

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
            <Link to="/" >Home</Link> | {" "}
            <Link to="/product">Product</Link> |{" "}
            <Link to="/cart" >Cart ({cart ? cart.length : 0})</Link> |{" "}

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
    padding: "10px 20px",
    background: "#eee",
    alignItems: "center",
  },
  btn: {
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;