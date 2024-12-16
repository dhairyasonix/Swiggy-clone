import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count:0,
            count1:3
        }
    };
  render() {
    const{name} = this.props;
const{count,count1} = this.state;
    return(
            <div className="user-info">
        <h1>{name}</h1>
        <h4>count:{count} </h4>
        <button onClick={()=> 
        this.setState({
            count: this.state.count + 1
        })

        }>click this</button>
      </div>
        );
    }
    
      
}


export default UserClass;
