import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "Heading - 1");
const heading2 = React.createElement("h2", {}, "Heading - 2");

const child1 = React.createElement("div", { id: "child-1" }, [
  heading1,
  heading2,
]);
const child2 = React.createElement("div", { id: "child-2" }, [
  heading1,
  heading2,
]);

// console.log(process.env);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(parent);
