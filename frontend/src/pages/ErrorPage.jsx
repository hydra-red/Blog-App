import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="font-bold text-4xl">Page not found</h1>
      <Link to={"/"}>
        <button className="btn btn-primary">Go back to Home Page</button>{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
