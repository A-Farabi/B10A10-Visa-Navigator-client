import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <h1 className="text-8xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">Oops! Page Not Found</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-white text-blue-700 font-semibold text-lg rounded-lg hover:bg-gray-100 transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
