import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products"
        );

        setProducts(res.data.products.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
              Discover Amazing Products
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Shop the latest electronics,
              fashion, accessories and more.
            </p>

            <Link to="/product">
              <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Shop Now
              </button>
            </Link>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="shopping"
            className="w-80 mt-10 md:mt-0"
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <Link
            to="/product"
            className="text-blue-600 font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">
                  {product.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-600 font-bold text-lg">
                    ₹{Math.round(product.price * 85)}
                  </span>

                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                    ⭐ {product.rating}
                  </span>
                </div>

                <Link to="/product">
                  <button className="mt-5 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;