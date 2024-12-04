/* <div id="parent">
      <div id="child">
        <h1>helow</h1>
        <h1>hellow2</h1>
       </div>
  </div> */


const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "hellow "), React.createElement("h2", {}, "hellow2")]));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

