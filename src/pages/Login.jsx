import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "https://ecommerce-backend-oc9b.onrender.com/api/auth/login",
        loginData
      );

      localStorage.setItem("token", res.data.token);

      toast.success("Login successful");

      navigate("/");

    } catch (error) {

      toast.error("Invalid credentials");

    } finally {

      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-8">
          Welcome Back 👋
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={loginData.email}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={loginData.password}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Don’t have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-1"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;