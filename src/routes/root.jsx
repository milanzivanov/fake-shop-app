import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Loader from "../components/Loader";

function Root() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
