import React from 'react';

class Reversing extends React.Component{
    constructor(props){
        super(props);
    }
    handleChange = (event)=>{
        this.props.onInputChange(event.target.value);
    }
    render(){
        return(
            <div>
                <input type="text" value={this.props.textValue} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Reversing;