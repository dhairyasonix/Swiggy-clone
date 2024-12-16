import useRestaurantInfo from "../utils/useRestaurantInfo";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  
  const {resID} = useParams();
  
  

  const resInfo = useRestaurantInfo(resID)



  if (resInfo === null) return <Shimmer />;
  
  const { name, costForTwoMessage, cuisines, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;
const {itemCards,categories} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //  console.log(itemCards[0].card.info.price)


  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>{costForTwoMessage}</h3>
            <h4>Cuisines: {cuisines.join(", ")}:-{avgRatingString}</h4>
            

            <div>
                <ul>
                   { (itemCards || categories?.itemCards).map(item=> <li  key={item?.card?.info?.id}> {item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100 } </li>)}
            
                </ul>
            </div>
    </div>
  );
};

export default RestaurantInfo;
