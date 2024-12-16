import { URL_LOGO } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[loginStatus,setloginStatus] = useState("login")
    const Onlinestatus = useonlineStatus();
  return (
    <div className="header">
      <img className="logo" src={URL_LOGO}></img>
      <div className="nav-items">
        <ul>
        <li>{Onlinestatus===true? "Online" : "offline"}</li>
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="#">Cart</Link></li>
          <button onClick={()=>{ loginStatus=="login" ? setloginStatus ("logout") : setloginStatus("login")
          }

          } className="login"> {loginStatus} </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
