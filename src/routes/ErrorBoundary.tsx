import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <h1 className="text-2xl font-semibold">Oops!</h1>
        <h2>Error: "{error.status}"</h2>
        <p className="italic">"{error.statusText}"</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <h1 className="text-2xl font-semibold">Oops!</h1>
        <p className="italic">Something went wrong.</p>
      </div>
    );
  }
}

export default ErrorBoundary;
