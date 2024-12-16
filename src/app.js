import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import {createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurantInfo from "./components/ResturantInfo.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const approuter =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/resturant/:resID",
        element:<RestaurantInfo/>,
      },
    ],
    errorElement:<Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>); //this is heandling of render
