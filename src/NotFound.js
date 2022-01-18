import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-fouond">
      <h2>sORRY</h2>
      <p>that page cant be found</p>
      <Link to="/"> Back to the home page...</Link>
    </div>
  );
};

export default NotFound;
