import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error</h1>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export { NotFound };