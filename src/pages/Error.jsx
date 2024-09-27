import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="flex text-9xl p-5">Oops!</h1>
      <p className="text-3xl text-red-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-500">
        <i>{error.data || error.message}</i>
      </p>

      <button onClick={() => navigate(-1)}>Go back to home</button>
    </div>
  );
}

export default Error;
