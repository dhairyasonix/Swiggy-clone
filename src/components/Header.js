import { URL_LOGO } from "../utils/Constants";
import { useState } from "react";

const Header = () => {
    const[loginStatus,setloginStatus] = useState("login")
  return (
    <div className="header">
      <img className="logo" src={URL_LOGO}></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button onClick={()=>{ loginStatus=="login" ? setloginStatus ("logout") : setloginStatus("login")
          }

          } className="login"> {loginStatus} </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
