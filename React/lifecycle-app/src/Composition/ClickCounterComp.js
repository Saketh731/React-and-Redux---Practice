import React from 'react';

class ClickCounterComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = ()=>{
        this.setState(prevState=>{
            return {count: prevState.count + 1};
        })
    }
    componentDidMount(){
        console.log(new ClickCounterComp());
    }

    render(){
        const {count} = this.state
        return(
            <div>
                <h2>Button Count - {count}</h2>
                <button onClick = {this.incrementCount}>Click Here</button>
            </div>
        )
    }
}

export default ClickCounterComp;