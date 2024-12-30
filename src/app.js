import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurantInfo from "./components/ResturantInfo.js";
import UserContext from "./utils/UserContext.js";
import Cart from "./components/cart.js";
import { Provider } from "react-redux";
import appStore from "./utils/Appstore.js";

const About = lazy(() => import("./components/About.js"));


const App = () => {
const [nmaechange,setnmaechange ] = useState(null)

  useEffect(() => {
    const data = {
      userinfo: "marry",
    }
setnmaechange(data.userinfo)
  }, []);
  

  

  return (
    <div className="app">
      <Provider store={appStore}>
      <UserContext.Provider value={{ userinfo: nmaechange , setnmaechange}}>
        <Header />
      
      <Outlet />
      </UserContext.Provider>
      </Provider>
    </div>
  ); 
};

const approuter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<h1>loading..</h1>}>
              {" "}
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/resturant/:resID",
          element: <RestaurantInfo />,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider
    future={{
      v7_startTransition: true,
    }}
    router={approuter}
  />
); //this is heandling of render
