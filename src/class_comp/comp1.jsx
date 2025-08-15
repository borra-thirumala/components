//creating counter using class components from 0

import React from "react";

class Firstcomp extends React.Component{
   constructor(props){
    super(props);
        this.state = {
             count:0,
             name:"Thirumala"
        };
        console.log("constructor",props)
    }
   
   
    render(){
        return(
            <>
            <h2>{this.state.name}</h2>
            <h1>{this.state.count}</h1>

            <h3>{this.props.user}</h3>
           

            <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>

            <button onClick={()=>this.setState({count:this.state.count-1})}>decrement</button>
            </>
        )
    }
}

export default Firstcomp;