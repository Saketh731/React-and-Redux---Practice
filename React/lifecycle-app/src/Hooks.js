import React, {useState} from 'react';
import Hook1 from './Hook1.js';

class Hooks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hook1: false,
        }
    }
    showHook1 = ()=>{
        this.setState(function(state){
            return {hook1: !this.state.hook1};
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.showHook1}>Hook1</button>
                {this.state.hook1 ? <Hook1/> : null}
            </div>
        )
    }
}

export default Hooks;