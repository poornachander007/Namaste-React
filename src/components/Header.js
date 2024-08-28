// import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
// import LOGO_PATH from "../utils/images/image11.png";
// import CDKK_PATH from "../utils/images/cdkk.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const onlineStatus = useOnlineStatus();

  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cart);
  // console.log(cartItems, "cartItems...........");

  return (
    <div className="header z-50 w-[100%] shadow-md fixed flex justify-between items-center bg-zinc-300 border-[12px] box-border border-x-green-900 border-y-[#fc8019]">
      <div className="logo-container m-2 flex">
        {/* <img className="logo" alt="logo" src={LOGO_URL} /> */}
        🐷
        <img
          className="w-[100px] p-1 animate-bounce hover:animate-spin "
          alt="logo"
          // src={LOGO_PATH}
          // src="https://www.svgrepo.com/show/72022/pig.svg"
          src="https://raw.githubusercontent.com/poornachander007/Namaste-React/main/src/utils/images/image11.png"
        />
        <img
          className="w-[100px] p-6 animate-bounce hover:animate-spin"
          alt="logo"
          // src={CDKK_PATH}
          src="https://www.svgrepo.com/show/33506/duck.svg"
          // src="https://raw.githubusercontent.com/poornachander007/Namaste-React/main/src/utils/images/cdkk.png"
        />
        🐥
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
          <li className="m-1 p-1 relative text-3xl animate-pulse">
            <Link to={"/cart"}>
              {/* 🛒 */}
              <img
                className="w-[40px]"
                src="https://www.svgrepo.com/show/508178/shopping-cart.svg"
              />
              <span className="absolute right-[-5] top-[-8] text-sm text-green-950 font-extrabold">
                ({cartItems.length})
              </span>
            </Link>
          </li>
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
          {/* <li className="m-3 text-purple-800 text-xl">{loggedInUser}</li> */}
          <li className="m-3 text-purple-800 text-xl overflow-x-auto whitespace-nowrap">
            <p className="inline-block">{loggedInUser}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
