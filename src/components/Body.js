// import ResList from "../utils/mockData";
import ResCard, { ResCardpramoteed } from "./ResCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [ListOfres, setListOfres] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState([""]);
  const Resturantpramoted = ResCardpramoteed(ResCard);
  const { setnmaechange, userinfo } = useContext(UserContext)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.0796545&lng=82.1409152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const OnLinestatus = useonlineStatus();
  if (OnLinestatus === false)
    return <h1>please check your internet sonnection</h1>;

  //condisnal statment
  return ListOfres?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-2 p-2">
          <input
            data-testid="searchInput"
            type="text"
            className=" border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              setsearchText(e?.target?.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 bg-green-200 rounded-md"
            onClick={() => {
              const filterdresturant = ListOfres.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText?.toLowerCase())
              );
              //filter the rsturant card and ui
              //searchtext
              setfilteredList(filterdresturant);
            }}
          >
            Search
          </button>

        </div>
        <div className="my-2 p-2">
          <button
            className="px-4 py-1 m-4 bg-green-200 rounded-md"
            onClick={() => {
              const filterdList = ListOfres.filter(
                (res) => res?.info?.avgRating > 4.2
              );
              setfilteredList(filterdList);
            }}
          >
            Top rated restrunt
          </button>
          <input
            type="text"
            className=" border border-solid border-black rounded-md"
            value={userinfo}
            onChange={(e) => {
              setnmaechange(e?.target?.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList?.map((restrunt) => (
          <Link key={restrunt?.info?.id} to={"resturant/" + restrunt?.info?.id}>
            <Resturantpramoted resData={restrunt} />
            {/* <Resturantpramoted/> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
