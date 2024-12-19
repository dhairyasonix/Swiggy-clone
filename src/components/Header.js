import { URL_LOGO } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginStatus, setloginStatus] = useState("login");
  const Onlinestatus = useonlineStatus();
  return (
    <div className="header flex justify-between bg-pink-100 shadow-md mb-2">
      <img className="w-[100px]" src={URL_LOGO}></img>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="m-2 px-2">
            {Onlinestatus === true ? "Online" : "offline"}
          </li>
          <li className="m-2 px-2 hover:bg-green-300 hover:rounded-lg">
            <Link to="/">Home</Link>
          </li>

          <li className="m-2 px-2 hover:bg-green-300 hover:rounded-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2 px-2 hover:bg-green-300 hover:rounded-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2 px-2 hover:bg-green-300 hover:rounded-lg">
            <Link to="#">Cart</Link>
          </li >
          <button className="m-2 px-2 hover:bg-green-300 hover:rounded-lg"
            onClick={() => {
              loginStatus == "login"
                ? setloginStatus("logout")
                : setloginStatus("login");
            }}
            
          >
            {" "}
            {loginStatus}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
