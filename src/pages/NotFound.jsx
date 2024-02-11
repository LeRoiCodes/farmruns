import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center font-oswald">
      <h1>Page not found!</h1>
      <p>
        Return{" "}
        <Link to="/" className="text-green-10">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
