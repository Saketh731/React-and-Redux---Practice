import React from 'react';
import RefForwarding from './RefForwarding.js';

class ParentRefForwarding extends React.Component{
    constructor(props){
        super(props);
        this.componentInputRef = React.createRef();
    }
    onClickHandler = ()=>{
        this.componentInputRef.current.focus();
    }
    render(){
        return(
            <div>
                <RefForwarding ref={this.componentInputRef}/>
                <button onClick={this.onClickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentRefForwarding;