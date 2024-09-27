/* eslint-disable react-refresh/only-export-components */
// import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getProducts } from "../services/apiProducts";

export async function loader() {
  const products = await getProducts();
  return products;
}

function Products() {
  const products = useLoaderData();
  // const [products, setProducts] = useState([]);

  // useEffect(function () {
  //   async function fetchData() {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold tracking-tight py-5 text-indigo-500 sm:text-4xl">
        Get ready to shop &apos;til you drop.
      </h2>
      <div>
        {products.map((product) => (
          <div
            className="flex y-space-5 bg-slate-100 p-5 my-5 rounded-sm"
            key={product.id}
          >
            <div>
              <img className="w-40" src={product.image} alt={product.title} />
            </div>
            <div className="px-5 y-space-5">
              <h3 className="text-xl font-bold pb-5">{product.title}</h3>
              <p className="text-base mb-5">{product.description}</p>
              <p className="text-xl mb-5">{product.price} &#8364;</p>
              <Link to={`/products/${product.id}`}>go to product</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
