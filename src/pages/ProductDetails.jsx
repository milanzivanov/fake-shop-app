/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";
import { getProduct } from "../services/apiProducts";

export async function loader({ params }) {
  const id = params.productId;
  const product = await getProduct(id);
  return product;
}

function ProductDetails() {
  const product = useLoaderData();

  return (
    <div className="mx-auto max-w-7xl">
      <h2>{product.title}</h2>
      <img className="w-40" src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to cart</button>
      <Link to=".." relative="path">
        Go back
      </Link>
    </div>
  );
}

export default ProductDetails;
