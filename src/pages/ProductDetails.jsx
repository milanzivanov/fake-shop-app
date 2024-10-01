/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { getProduct } from "../services/apiProducts";

export async function loader({ params }) {
  const id = params.productId;
  const product = await getProduct(id);
  return product;
}

function ProductDetails() {
  const product = useLoaderData();
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center py-5">
          <div className="flex flex-col items-start w-1/2 bg-slate-50 shadow-md mt-5 p-5">
            <h2 className="text-center tracking-wide text-3xl py-5 font-bold text-gray-900">
              {product.title}
            </h2>
            <div className="flex justify-center">
              <img
                className="w-1/2 pb-5"
                src={product.image}
                alt={product.title}
              />
            </div>
            <p className=" text-pretty leading-relaxed pb-5">
              {product.description}
            </p>
            <div className="flex flex-col">
              <p className="text-md text-balanced pb-5">
                <span className="font-bold">Category</span>: {product.category}
              </p>
              <p className="text-xl italic pb-5">
                <span>Price: </span>
                <span className="font-bold">{product.price}&#8364;</span>
              </p>
            </div>
            <div className="flex items-center gap-5">
              <button
                className="text-white bg-indigo-500 rounded-sm px-3 py-2 hover:bg-indigo-600"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <Link
                className="font-bold text-indigo-500 hover:text-indigo-600"
                to=".."
                relative="path"
              >
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
