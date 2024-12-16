import { useRouteError } from "react-router-dom";


const Error =()=>{
    const err =useRouteError();
    return(
        <div>
            <h1>
                opps server not found
            </h1>
            <h3>
                {err.status }: {err.statusText}
            </h3>
            {console.log(err)}
        </div>
    );
};
export default Error;