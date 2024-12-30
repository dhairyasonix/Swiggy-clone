import { useDispatch } from "react-redux";
import { URL_CDN } from "../utils/Constants";
import { addItem,removeItem } from "../utils/cartSlice";
const ItemList = ({ items, label }) => {
  const dispach = useDispatch();
  const hendleAddItem = (item)=>{
    dispach(addItem(item))
  }
  const hendleRemoveItem =(id)=>{
    dispach(removeItem({id}))
    console.log(id)
  }
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className=" border-b-2">
          <div className="flex justify-between m-2 p-4">
            <div className="w-[400px] text-left">
              <span className=" py-2 font-bold">
                {item.card.info.name} - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs  py-3">{item.card.info.description}</p>
            </div>
            <div className="w-[150px]  ">
           <div className="absolute "> <button className="bg-green-400 text-white " onClick={()=>{label === "Add+" ? hendleAddItem(item): hendleRemoveItem(item.card.info.id)}}>{label}</button> </div>
              {item.card.info.imageId && (
                <img
                  className="w-full rounded-md"
                  src={URL_CDN + item.card.info.imageId}
                />) }
                
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
