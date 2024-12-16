import { useEffect ,useState} from "react";
import { RES_MENU } from "./Constants";


const useRestaurantInfo =(resID)=>{
//fetch
const [ResInfo,setResInfo] = useState(null)
useEffect(()=>{
    fetchData()
},[])


const fetchData = async ()=>{
    const data = await fetch(RES_MENU + resID);
    const json = await data.json()
setResInfo(json?.data)
console.log(json)
}


return ResInfo;
}

export default useRestaurantInfo 