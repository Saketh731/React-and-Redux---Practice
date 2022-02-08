import React from 'react';
import Reversing from './Reversing.js';

class LiftingStateUp extends React.Component{
    constructor(props){
        super(props);
        this.firstInputChange = this.firstInputChange.bind(this);
        this.state = {textValue: '', num: ''}
    }
    firstInputChange(text){
        this.setState((state)=>{
            return {textValue: text, num: '1'};
        });
    }
    
    secondInputChange(text){
        this.setState((state)=>{
            return {textValue: text, num: '2'};
        });
    }
    reverseString(str){
        return str.split("").reverse().join("");
    }
    render(){
        const num = this.state.num;
        const textValue = this.state.textValue;
        const revString = this.reverseString(textValue);
        let text1 = '';
        let text2 = '';
        if(num == 1){
            text1 = textValue;
            text2 = revString;
        }
        else{
            text1 = revString;
            text2 = textValue;
        }
        return(
            <div>
                <div>
                    <Reversing textValue ={text1} onInputChange={this.firstInputChange}/>
                </div>
                <div>
                    <Reversing textValue ={text2} onInputChange={this.secondInputChange}/>
                </div>
            </div>
        )
    }
}

export default LiftingStateUp;