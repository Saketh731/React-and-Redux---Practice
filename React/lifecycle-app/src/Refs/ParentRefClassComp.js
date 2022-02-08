import React from 'react';
import RefClassComp from './RefClassComp.js';

class ParentRefClassComp extends React.Component{
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }
    onClickHandler = ()=>{
        this.componentRef.current.focusInputElement();
    }
    render(){
        return(
            <div>
                <RefClassComp ref={this.componentRef}/>
                <button onClick={this.onClickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default ParentRefClassComp;