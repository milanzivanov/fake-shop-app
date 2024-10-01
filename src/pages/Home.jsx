import { Slider } from "../components/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex justify-center h-[calc(100vh-96px)] bg-blue-100 bg-[url('/bg-image.jpeg')] bg-cover">
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold tracking-wide text-slate-100 mb-10">
            Find your perfect match.
          </h1>

          <div className="z-50 w-full mb-10">
            <Slider />
          </div>
          <Link
            to="/products"
            className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-slate-50 text-2xl px-5 py-3 rounded-md"
          >
            Discover our products <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
