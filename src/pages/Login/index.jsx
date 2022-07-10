import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  return (
    <div>
      <Link to="/pdf" className="LoginButton">
        Login
      </Link>
    </div>
  );
};

export default Login;
