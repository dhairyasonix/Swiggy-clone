const User =({name,location})=>{
    return(
        <div className="user-info">
            <h1>{name}</h1>
            <h4>Adress {location}</h4>
            <h4>contact dhigads@gmailcom</h4>
            
        </div>
    )
}

export default User