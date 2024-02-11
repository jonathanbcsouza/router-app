import { useRouteError } from 'react-router-dom';

type ErrorType = {
  message: string;
  statusText?: string;
};

export function ErrorPage() {
  const error = useRouteError() as ErrorType;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
