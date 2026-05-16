import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePayment = async () => {
    try {
      const { data: order } = await axios.post(
        "https://ecommerce-backend-oc9b.onrender.com/api/payment/create-order",
        {
          amount: total,
        }
      );

      const options = {
        key: "rzp_test_SlZmJN3XFDFzwi",
        amount: order.amount,
        currency: order.currency,
        name: "My E-Kart",
        description: "Order Payment",
        order_id: order.id,

        handler: async function (response) {
          const { data } = await axios.post(
            "https://ecommerce-backend-oc9b.onrender.com/api/payment/verify",
            response
          );

          if (data.success) {
            alert("Payment Successful");

            dispatch(clearCart());
          }
        },

        theme: {
          color: "#111827",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 className="text-2xl">
          Your Cart is Empty 😢
        </h2>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 border p-4 rounded-xl mb-5 shadow-sm bg-white"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-green-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() =>
                        dispatch(decreaseQty(item.id))
                      }
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQty(item.id))
                      }
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="border p-6 rounded-xl shadow bg-white h-fit">
            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Total</span>
              <span className="font-bold">
                ₹{total}
              </span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-black text-white py-3 rounded-lg mt-5 hover:bg-gray-800 transition"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;