/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import { useCart } from "../context/CartContext";

export async function loader() {
  const products = await getProducts();
  return products;
}

function Products() {
  const products = useLoaderData();

  const { darkMode } = useCart();

  return (
    <div
      className={`flex justify-center bg-[url('/bg-image.jpeg')] bg-cover dark:bg-slate-800 ${
        darkMode && "dark"
      } bg-slate-100`}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold tracking-tight pb-0 pt-8 dark:text-slate-100 text-gray-900">
          Get ready to shop &apos;til you drop.
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <Link
              className="flex bg-slate-100 hover:bg-slate-300 p-5 my-5 rounded-sm shadow-sm"
              key={product.id}
              to={`/products/${product.id}`}
            >
              <div className="flex flex-col">
                <div>
                  <h3 className="text-xl text-gray-900 font-bold tracking-wide pb-5">
                    {product.title}
                  </h3>
                  <div className="flex justify-center mb-5">
                    <img
                      className="w-40"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>
                <div className="py-2">
                  <p className="text-balance text-base leading-relaxed mb-10">
                    {product.description}
                  </p>

                  <p className="flex justify-start italic font-bold text-xl mb-5 text-indigo-500">
                    <span className=" text-gray-800">Price:&nbsp;</span>
                    {product.price}&#8364;
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
