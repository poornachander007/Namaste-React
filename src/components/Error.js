import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h3>Somthing went wrong!!</h3>
      <h3>
        {error.status} : Page -
        {/* <span style={{ color: "red" }}>{error.statusText}</span> */}
      </h3>
      {/* <p>{error.error.message}</p> */}
    </div>
  );
};

export default Error;
