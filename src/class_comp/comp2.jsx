//we are getting number(props) from another component to create counter, we're not defining directly here in this component

import React from "react";

class Secondcomp extends React.Component{

    constructor(props){
        super(props)
        this.state={
            counter:props.n
        }
        console.log(props.n)
    }

    //defining a function and handling state instead of writing it in  button

    handleDecrement=()=>{
        this.setState({counter:this.state.counter-1})
    }


    render(){
        return<>
        <h1>{this.state.counter}</h1>

        <button onClick={()=>this.setState({counter:this.state.counter+1})}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        </>
    }
}

export default Secondcomp