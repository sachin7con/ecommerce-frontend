import {Link } from "react-router-dom";
function Navbar({ cart = [] }){

    return(
        <>
        <nav style={styles.nav}>
        <h2>E-shop</h2>

        <div>
            <Link to="/" >Home</Link> | {" "}
            <Link to="/product">Product</Link> |{" "}
            <Link to="/cart" >Cart ({cart ? cart.length : 0})</Link>
        </div>


        </nav>
        </>
    )
}

const styles = {
    nav : {
        display: "flex",
        justifyContent: "space-between",
        padding : "10px",
        background: "#eee"

    }
}

export default Navbar;