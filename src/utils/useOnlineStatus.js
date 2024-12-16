import { useState,useEffect } from "react"
const useonlineStatus=()=>{


const [OnlineStatus,setOnlineStatus] = useState(true)


useEffect(()=>{
window.addEventListener("offline", ()=>{
setOnlineStatus(false);
})

window.addEventListener("online", ()=>{
    setOnlineStatus(true);
    })

},[])

return OnlineStatus;

};

export default useonlineStatus;