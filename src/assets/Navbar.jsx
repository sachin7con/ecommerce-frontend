import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../features/auth/authSlice";

function Navbar() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const { token } = useSelector(
    (state) => state.auth
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  function handleLogout() {

    dispatch(logout());

    navigate("/login");
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            MyEKart
          </Link>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 mx-10">

            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

          {/* MENU */}
          <div className="flex items-center gap-5">

            <Link
              to="/"
              className="hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/product"
              className="hover:text-blue-600"
            >
              Products
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-blue-600"
            >
              🛒 Cart

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            )}

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;