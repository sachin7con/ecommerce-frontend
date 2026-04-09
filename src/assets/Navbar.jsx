import {Link } from "react-router-dom";
function Navbar(){

    return(
        <>
        <nav>
        <h2>E-shop</h2>

        <div>
            <Link to="/" >Home</Link>
            <Link to="/cart" >Cart</Link>
            <Link to="/product">Product</Link>
        </div>


        </nav>
        </>
    )
}

export default Navbar;