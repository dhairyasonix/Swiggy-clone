import useRestaurantInfo from "../utils/useRestaurantInfo";
import ResturantCatogery from "./ResturantCatogery";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantInfo(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
 
  

  const categoris =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        
    );
//  console.log(categoris)
    
  return (
    <div className=" text-center">
      <h1 className="font-bold m-6 p-2 text-xl">{name}</h1>
      <span className="m-2 p-2 font-bold">{costForTwoMessage} </span>
      
      {/* header body*/}
      {categoris.map((catogery)=>
        <ResturantCatogery data={catogery.card.card}/>
      )}
    </div>
  );
};

export default RestaurantInfo;
