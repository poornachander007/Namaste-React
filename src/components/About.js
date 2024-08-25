import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-2xl">About Page</h1>
      <h2>
        UserName :{" "}
        <span className="text-xl text-red-700 font-bold">{loggedInUser}</span>
      </h2>
    </div>
  );
};

export default About;
