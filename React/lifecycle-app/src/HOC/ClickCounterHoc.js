import React from 'react';
import UpdatedComponent from './UpdatingComponent.js';

class ClickCounterHoc extends React.Component{
    render(){
        return(
            <div>
                <h2>Button Count - {this.props.count}</h2>
                <button onClick = {this.props.incrementCount}>Click Here {this.props.name}</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounterHoc, 1);