import React from 'react';

class RefClassComp extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }
    focusInputElement = ()=>{
        this.inputRef.current.focus();
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default RefClassComp;