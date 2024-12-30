import { useState } from "react";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import ResturantCatogery from "./ResturantCatogery";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {

  const { resID } = useParams();

  const resInfo = useRestaurantInfo(resID);

  const [showIndex,setshowIndex] = useState(1)
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
 
  

  const categoris =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        
    );

    
  return (
    <div className=" text-center">
      <h1 className="font-bold m-6 p-2 text-xl">{name}</h1>
      <span className="m-2 p-2 font-bold">{costForTwoMessage} </span>
      
      {/* header body*/}
      {categoris.map((catogery,index)=>
        <ResturantCatogery key={catogery.card.card.title} data={catogery.card.card} showItem={index===showIndex?true :false}
        setshowIndex={()=>setshowIndex(index)}/>
      )}
    </div>
  );
};

export default RestaurantInfo;
