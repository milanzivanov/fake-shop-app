/* eslint-disable react-refresh/only-export-components */
// import { useContext } from "react";
import { useCart } from "../context/CartContext";

import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiProducts";

import { Slider } from "../components/Slider";

export async function loader() {
  const products = await getProducts();
  return products;
}

function Home() {
  const { darkMode } = useCart();

  const products = useLoaderData();

  return (
    <>
      <div
        className={`flex justify-center h-[calc(100vh-96px)] bg-[url('/bg-image.jpeg')] bg-cover dark:bg-slate-800 ${
          darkMode && "dark"
        } bg-slate-100`}
      >
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center h-full">
          <div className="w-full text-center dark:bg-slate-200 rounded-md bg-slate-700 p-5">
            <h1 className="text-4xl font-bold uppercase tracking-wide dark:text-indigo-500 text-slate-50 py-5">
              Find your perfect match
            </h1>

            <div className="z-50 w-full mb-10">
              <Slider products={products} />
            </div>
            <div className="flex justify-center">
              <Link
                to="/products"
                className="flex items-center justify-center dark:bg-slate-50 bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-50 dark:text-indigo-500 text-slate-50 text-2xl px-5 py-3 rounded-md"
              >
                Discover our products <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
