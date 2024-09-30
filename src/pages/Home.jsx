import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center h-[calc(100vh-96px)] bg-blue-100 bg-[url('/bg-image.jpeg')] bg-cover">
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-start h-full">
        <h2 className="text-3xl font-bold tracking-wide text-indigo-300 mb-5">
          Fake Shop App
        </h2>
        <h1 className="text-6xl font-bold tracking-wide text-slate-50 mb-10">
          Find your perfect match.
        </h1>
        <Link
          to="/products"
          className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-slate-50 text-3xl px-10 py-3 rounded-md"
        >
          Discover our products <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
