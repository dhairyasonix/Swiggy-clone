import React from "react"
 import ReactDOM from "react-dom/client"

const Title = <h1>hellow javascript</h1>;

const Heading =(i)=> 
(
<div>
  {Title}
  <h2>{i}</h2>
</div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading()) //this is heandling of render

