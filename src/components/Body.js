// import ResList from "../utils/mockData";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [ListOfres, setListOfres] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState([""]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.0796545&lng=82.1409152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfres(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
const OnLinestatus = useonlineStatus();
if (OnLinestatus=== false) return <h1>please check your internet sonnection</h1>

  //condisnal statment
  return ListOfres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
      
            }}
          />
          <button
            onClick={() => {
              const filterdresturant = ListOfres.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //filter the rsturant card and ui
              //searchtext
              setfilteredList(filterdresturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filterdList = ListOfres.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredList(filterdList);
          }}
        >
          Top rated restrunt
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restrunt) => (
          <Link key={restrunt.info.id} to={"resturant/"+restrunt.info.id}><ResCard  resData={restrunt} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
