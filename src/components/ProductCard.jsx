function ProductCard({ product, addToCart }) {

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-2xl transition duration-300 overflow-hidden">

      <img
      src={product.thumbnail}
      alt={product.title}
      className="w-full h-52 object-cover rounded-lg"
      />

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          {product.title}
        </h3>

        <p className="text-green-600 text-2xl font-bold mt-2">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;