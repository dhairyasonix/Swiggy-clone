import { URL_CDN } from "../utils/Constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((items) => (
        <div key={items.card.info.id} className="bg-gray-100">
          <div className="flex justify-between m-2 p-4">
            <div className="w-[400px] text-left">
              <span className=" py-2 font-bold">
                {items.card.info.name} - ₹
                {items.card.info.price / 100 ||
                  items.card.info.defaultPrice / 100}
              </span>
              <p className="text-l  py-3">{items.card.info.description}</p>
            </div>
            <div className="w-[150px] mx-4 ">
              {items.card.info.imageId ? (
                <img
                  className="w-full rounded-md"
                  src={URL_CDN + items.card.info.imageId}
                />) : (<></>)}
                <button className="absolute ">Add+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
