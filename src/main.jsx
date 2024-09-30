import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./routes/AppLayout.jsx";

import Home from "./pages/Home.jsx";
import Products, { loader as productsLoader } from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import ProductDetails, {
  loader as productDetailsLoader
} from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Order from "./pages/Order.jsx";
import Error from "./pages/Error.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "about",
        element: <About />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "order-summary",
        element: <Order />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
