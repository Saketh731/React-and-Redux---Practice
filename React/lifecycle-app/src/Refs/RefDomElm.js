import { element } from 'prop-types';
import React from 'react';

class RefDomElm extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCallBackRef = (element)=>{
            this.cbRef = element;
        }
    }
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);

        this.cbRef.focus();
        console.log(this.cbRef);
    }
    showAlert = ()=>{
        alert(this.inputRef.current.value);
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCallBackRef}/>
                <button onClick={this.showAlert}>Submit</button>
            </div>
        )
    }
}

export default RefDomElm;