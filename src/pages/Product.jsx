import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

import { fetchProducts } from "../services/productService";

import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

function Product() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Explore Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() =>
              dispatch(addToCart(product))
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Product;