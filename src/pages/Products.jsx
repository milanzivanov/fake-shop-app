/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from "react-router-dom";
import { getProducts } from "../services/apiProducts";

export async function loader() {
  const products = await getProducts();
  return products;
}

function Products() {
  const products = useLoaderData();

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight py-5 text-gray-900 sm:text-4xl">
          Get ready to shop &apos;til you drop.
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              className="flex bg-slate-100 p-5 my-5 rounded-sm shadow-sm"
              key={product.id}
            >
              <div className="flex-1 ">
                <div>
                  <h3 className="text-xl text-gray-900 font-bold tracking-wide pb-5">
                    {product.title}
                  </h3>
                  <img
                    className="w-40"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="py-2">
                  <p className="text-balance text-base leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <p className="italic font-bold text-xl mb-5">
                    {product.price}&#8364;
                  </p>
                  <Link
                    className=" text-white bg-indigo-500 rounded-sm px-3 py-2 hover:bg-indigo-600"
                    to={`/products/${product.id}`}
                  >
                    See product<span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
