import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const heading = <h1>Heading.....</h1>;

const Title = () => {
  console.log(`Title Compo hit....`);
  console.log(document.getElementById("root"));
  return (
    <div className="title_container">
      {heading}
      <p>I'm paragraph.....</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div className="parent_container">
      <Title />
      <button type="button">Iam button </button>
    </div>
  );
};

const nestedHeaderReactElement = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", {}, "This is.... H1 from React.createElement"),
    React.createElement("h2", {}, "This is.... H2 from React.createElement"),
    React.createElement("h3", {}, "This is.... H3 from React.createElement"),
  ]
);

const nestedHeaderJsxElement = (
  <div>
    <h1>This is.... H1 from JsxElement</h1>
    <h2>This is.... H2 from JsxElement</h2>
    <h3>This is.... H3 from JsxElement</h3>
  </div>
);

const NestedHeaderFunctionComponent = () => {
  return (
    <div>
      <h1>This is.... H1 from Function-Component</h1>
      <h2>This is.... H2 from Function-Component</h2>
      <h3>This is.... H3 from Function-Component</h3>
    </div>
  );
};

const AllContainer = () => {
  return (
    <div>
      {nestedHeaderReactElement}
      <hr />
      {nestedHeaderJsxElement}
      <hr />
      <NestedHeaderFunctionComponent />
    </div>
  );
};

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img
          src="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?rs=1&pid=ImgDetMain"
          alt="logo"
        />
      </div>
      <div className="searchContainer">
        <input type="search" />
      </div>
      <div className="userIconContainer">
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/302/462/original/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
          alt="userIcon"
        />
      </div>
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<ParentComponent />);
// rootElement.render(<AllContainer />);
rootElement.render(<Header />);
