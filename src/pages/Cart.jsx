import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItem, removeFromCart, darkMode } = useCart();
  return (
    <div
      className={`h-[calc(100vh-96px)] dark:bg-slate-800 ${
        darkMode && "dark"
      } bg-slate-200`}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold tracking-tight pb-5 pt-8 dark:text-slate-100 text-gray-900">
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
                    <div className="flex justify-center">
                      <img
                        className="w-40 pb-5"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
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
            <h3 className="text-xl dark:text-white font-bold pb-5">
              Your cart is empty.
            </h3>
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
