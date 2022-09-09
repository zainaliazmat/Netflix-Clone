import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...restProps }) => {
  let token = localStorage.getItem("token");

  return (
    <Route
      {...restProps}
      render={() => {
        if (token !== null) {
          console.log("true field sun");
          return children;
        } else {
          console.log("false field sun");
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
