import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ to, source, children }) {
  return (
    <Link to={to}>
      <img src={source} alt="" />
      {children}
    </Link>
  );
}

export default LinkButton;
