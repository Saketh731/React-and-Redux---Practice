import React from 'react';
import ClickCounterInherit from './Inheritance/ClickCounterInherit.js';
import KeyUpCounterInherit from './Inheritance/KeyUpCounterInherit.js';

class Inheritance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.getStateCount = this.getStateCount.bind(this);
    }

    incrementCount(){
        this.setState(prevState=>{
            return {count: prevState.count + 1};
        })
    }

    getStateCount(){
        return this.state.count;
    }

    render(){
        return(
            <div>
                Hello
                <ClickCounterInherit/>
                <KeyUpCounterInherit/>
            </div>
        )
    }
}
export default Inheritance;