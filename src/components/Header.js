import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import LOGO_PATH from "../utils/images/image11.png";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img className="logo" alt="logo" src={LOGO_URL} /> */}
        <img className="logo" alt="logo" src={LOGO_PATH} />
        {/* <img className="logo" alt="logo" src={imagePath} /> */}
      </div>
      <div className="nav-items-container">
        <ul className="nav-items-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
          {/* <li> */}
          <button
            onClick={() => {
              loginState === "Login"
                ? setLoginState("Logout")
                : setLoginState("Login");
            }}
            className="login-btn"
            type="button"
          >
            {loginState}
          </button>
          {/* </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
