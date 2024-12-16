import { URL_CDN } from "../utils/Constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  // console.log(resData.info);
  // const resinfo{resData} = props;
  return (
    <div className="res-card">
      <div className="Logos">
        <img className="res-logo" src={URL_CDN + cloudinaryImageId}></img>
      </div >
      <div className="rescardtext">
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};
export default ResCard;
