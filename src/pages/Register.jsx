import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      await axios.post(
        "https://ecommerce-backend-oc9b.onrender.com/api/auth/register",
        user
      );

      toast.success("Registration successful");

      navigate("/login");

    } catch (error) {

      toast.error("Registration failed");

    } finally {

      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-8">
          Create Account 🚀
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : "Register"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-1"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;