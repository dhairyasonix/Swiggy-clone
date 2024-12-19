import ItemList from "./ItemList";

const ResturantCatogery = ({ data }) => {
//   console.log(data);
  return (
    <div>
      <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          <span className="font-bold">{data.title}({data.itemCards.length
          })</span>
          <span>{"⬇"}</span>
        </div>
        <div>
           {
            <ul>
            <ItemList items={data.itemCards}/>
              
            </ul>
           } 
        </div>
      </div>
    </div>
  );
};

export default ResturantCatogery;
