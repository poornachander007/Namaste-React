import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import LOGO_PATH from "../utils/images/image11.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img className="logo" alt="logo" src={LOGO_URL} /> */}
        <img className="logo" alt="logo" src={LOGO_PATH} />
        {/* <img className="logo" alt="logo" src={imagePath} /> */}
      </div>
      <div className="nav-items-container">
        <ul className="nav-items-list">
          <li className="nav-item">
            Online Status {onlineStatus ? "✅" : "🛑"}
          </li>
          <li className="nav-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
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
