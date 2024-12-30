const Contact = ()=>{
    return(
        <div>
            <h1 className="fomt-bold text-xl ">Contact us</h1>
            {/* <h3>this is our address...</h3> */}
            <form >
                <input type="text" placeholder="name" className=" m-2 p-2 border border-black"></input>
                <input type="text" placeholder="message" className=" m-2 p-2 border border-black"></input>
                <button className=" m-2 p-2 border border-black rounded-lg bg-gray-100">Subbmit</button>
            </form>
        </div>
    );
};

export default Contact;