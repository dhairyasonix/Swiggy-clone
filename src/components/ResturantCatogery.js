
import ItemList from "./ItemList";

          <span className="mx-6">{"⬇"}</span>
const ResturantCatogery = ({ data,showItem,setshowIndex }) => {
  
  const handleclick =()=>{
    setshowIndex()
  }
//   console.log(data);
  return (
    <div>
      <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
          <span className="font-bold text-lg mx-6">{data?.title}({data?.itemCards?.length
          })</span>
          <span className="mx-6">{"⬇"}</span>
        </div>
        <div>
           {
           
           showItem && <ItemList items={data.itemCards} label={"Add+"}/>
              
            
           } 
        </div>
      </div>
    </div>
  );
};

export default ResturantCatogery;
