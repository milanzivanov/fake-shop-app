/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiProducts";

import { Slider } from "../components/Slider";

export async function loader() {
  const products = await getProducts();
  return products;
}

function Home() {
  const { darkMode } = useContext(CartContext);

  const products = useLoaderData();

  return (
    <>
      <div
        className={`flex justify-center h-[calc(100vh-96px)] dark:bg-black ${
          darkMode && "dark"
        } bg-[url('/bg-image.jpeg')] bg-cover`}
      >
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold tracking-wide dark:text-white text-slate-100 mb-10">
            Find your perfect match.
          </h1>

          <div className="z-50 w-full mb-10">
            <Slider products={products} />
          </div>
          <Link
            to="/products"
            className="flex items-center dark:bg-slate-50 bg-indigo-500  hover:bg-indigo-600 dark:hover:bg-indigo-50 dark:text-indigo-500 text-slate-50 text-2xl px-5 py-3 rounded-md"
          >
            Discover our products <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
