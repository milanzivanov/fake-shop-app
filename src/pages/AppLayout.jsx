import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import Loader from "../components/Loader";
import { CartProvider } from "../context/CartContext";

function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <CartProvider>
      <div>
        {isLoading && <Loader />}
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </div>
    </CartProvider>
  );
}

export default RootLayout;
