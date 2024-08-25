import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import LOGO_PATH from "../utils/images/image11.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="my-2 flex justify-between items-center bg-zinc-300">
      <div className="logo-container m-2">
        {/* <img className="logo" alt="logo" src={LOGO_URL} /> */}
        <img className="w-[100px] p-1" alt="logo" src={LOGO_PATH} />
        {/* <img className="logo" alt="logo" src={imagePath} /> */}
      </div>
      <div className="nav-items-container mx-4">
        <ul className="flex">
          <li className="m-3 text-purple-800 text-xl">
            Online Status {onlineStatus ? "✅" : "🛑"}
          </li>
          <li className="m-3 text-purple-800 text-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-3 text-purple-800 text-xl">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="m-3 text-purple-800 text-xl">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="m-3 text-purple-800 text-xl">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="m-3 text-purple-800 text-xl">Cart</li>
          {/* <li> */}
          <button
            onClick={() => {
              loginState === "Login"
                ? setLoginState("Logout")
                : setLoginState("Login");
            }}
            className="login-btn m-3 px-2 pb-1 text-[#fc8019] text-xl border border-solid border-y-green-600 border-x-red-600 rounded-lg"
            type="button"
          >
            {loginState}
          </button>
          {/* </li> */}
          <li className="m-3 text-purple-800 text-xl">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
