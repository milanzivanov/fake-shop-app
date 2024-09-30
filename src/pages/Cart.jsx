import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItem, removeFromCart } = useContext(CartContext);

  return (
    <div className="h-screen">
      <div className="mx-auto max-w-7xl">
        <h2 className="tracking-wide text-3xl py-5 font-bold text-gray-900">
          Your shoppyng cart ({cartItem.length})
        </h2>
        <div className="mb-5">
          {cartItem.length > 0 ? (
            <div className="flex flex-wrap gap-5">
              {cartItem.map((product) => (
                <div
                  className="flex-[0_0_32%] bg-slate-100 p-5 rounded-sm shadow-sm"
                  key={product.id}
                >
                  <div>
                    <h3 className="text-xl font-bold pb-5">
                      {product.title} - {product.price}&#8364;
                    </h3>
                    <img
                      className="w-40 pb-5"
                      src={product.image}
                      alt={product.title}
                    />
                    <p className="text-balance pb-5">{product.description}</p>
                    <button
                      className="text-white bg-red-500 rounded-sm px-3 py-2 hover:bg-red-600"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3 className="text-xl font-bold pb-5">Your cart is empty.</h3>
          )}
          {cartItem.length > 0 && (
            <div className="flex py-5">
              <Link
                to="/order-summary"
                className="text-white bg-indigo-500 rounded-sm px-3 py-2 hover:bg-indigo-600"
              >
                Go to checkout <span>&rarr;</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
