import React from 'react';

class KeyUpCounterComp extends React.Component{
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
    render(){
        const {count} = this.state;
        return(
            <div>
                <h2>KeyPress Count - {count}</h2>
                <input type="text" onKeyUp={this.incrementCount}/>
            </div>
        )
    }
}

export default KeyUpCounterComp;