import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import Loader from "../components/Loader";
import { CartProvider } from "../context/CartContext";

function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <CartProvider>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </div>
  );
}

export default Root;
