import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-[calc(100vh-96px)] bg-blue-100 bg-[url('/bg-image.jpeg')] bg-cover">
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center h-full">
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
    // <div className="bg-white py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //         From the blog
    //       </h2>
    //       <p className="mt-2 text-lg leading-8 text-gray-600">
    //         Learn how to grow your business with our expert advice.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;
