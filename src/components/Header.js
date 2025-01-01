import { URL_LOGO } from "../utils/Constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginStatus, setloginStatus] = useState("login");
  const Onlinestatus = useonlineStatus();
  const {userinfo} = useContext(UserContext);
  const cart = useSelector((store)=>store.cart.items);
  // console.log(cart);
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
          <li className="m-2  font-bold hover:bg-green-300 hover:rounded-lg">
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <button
            className="m-2 px-2 hover:bg-green-300 hover:rounded-lg"
            onClick={() => {
              loginStatus == "login"
                ? setloginStatus("Logout")
                : setloginStatus("Login");
            }}
          >
            {" "}
            {loginStatus}{" "}
          </button>
          <li className="m-2 px-2 font-bold hover:bg-green-300 hover:rounded-lg">
            {userinfo}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
