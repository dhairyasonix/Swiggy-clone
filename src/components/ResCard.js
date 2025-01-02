import { URL_CDN } from "../utils/Constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  // console.log(resData);
  // const resinfo{resData} = props;
  return (
    <div data-testid="ResCard" className="m-[7px] p-[5px] w-[200px] h-[350px] bg-gray-100 rounded-xl hover:bg-gray-300">
      <div className="w-[190px] h-[150px] ">
        <img className="object-cover w-full  h-full rounded-xl" src={URL_CDN + cloudinaryImageId}></img>
      </div >
      <div className="rescardtext">
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-xs py-1 my-1">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};
export const ResCardpramoteed =(ResCard)=>{
  return(props)=>{
    const { resData } = props;
    const { areaName
    } = resData?.info;
    
    return(
<div>
<label className="m-3 px-2 absolute text-white bg-black text-sm" > {areaName} </label>
   <ResCard {...props}/>
</div>
    );
  };
};

export default ResCard;
