import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";

import Home from "./pages/Home.jsx";
import Products, { loader as productsLoader } from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import ProductDetails, {
  loader as productDetailsLoader
} from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Error from "./pages/Error.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <Error />
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
        loader: productDetailsLoader
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
