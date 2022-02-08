import React from 'react';

class ErrorComponent extends React.Component{
        errorFunc = ()=>{
            if(this.props.counter<0){
                throw "Error!! Counter must be >=0";
                // throw new Error("Error!! Counter must be >=0");
            }
            else{
                return null;
            }
        }
        render(){
            return(
                <div>
                     {this.errorFunc()}
                </div>  
            )
        }

}
// const ErrorComponent = (props)=>{
//     <div>{props.something}</div>
//     throw "Function Component Error";
// } 

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor - Initialization Phase");
        this.state = { 
            counter: 0, 
            multiply: 0 
        };
        this.increment = ()=>{
            this.setState({
                counter: this.state.counter+1
            })
        }
        this.decrement = this.decrement.bind(this);
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
        if(props.multiply != state.multiply && props.multiply != 2){
            return (
                {
                    multiply: props.multiply,
                    counter: props.multiply
                }
            )
        }
        return null;
    }
    decrement(){
        this.setState(function(state, props){
            return {counter: state.counter-1};
        })
    }
    // componentWillMount(){
    //     console.log("componentWillMount");
    // }
    shouldComponentUpdate(nextProps, nextState){
        // if(nextState.counter < 0){
        //     throw new Error("Error!! Counter must be >= 0")
        // }
        if(nextState.counter >=5 && nextState.counter < 8){
            console.log("shouldComponentUpdate - DO NOT RENDER");
            return false;
        }
        else{
            console.log("shouldComponentUpdate - RENDER");  
            return true;  
        }    
    }
    // static getDerivedStateFromError(error){
    //     console.log("getDerivedStateFromError");
    //     return{
    //         error: error,
    //         info: 'nothing'
    //     }
    // }
    render(){
        console.log("render");

        if(this.state.error){
            return(
                <div>
                    <h2>{this.state.error.toString()} - {this.state.info.componentStack}</h2>
                </div>
            )
        }
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                
                <ErrorComponent counter={this.state.counter} />
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount");
        console.log("------------------");
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        return 10000;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate "+snapshot);
    }
    componentDidCatch(error, info){
        console.log("componentDidCatch");
        this.setState({error, info});
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
        console.log("--------End--------");
    }
}

export default Counter;