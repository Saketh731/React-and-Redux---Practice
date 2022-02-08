import React from 'react';
import UpdatedComponent from './UpdatingComponent.js';

class KeyUpCounterHoc extends React.Component{
    render(){
        const {count, incrementCount} = this.props;
        return(
            <div>
                <h2>KeyPress Count - {count}</h2>
                <input type="text" onKeyUp={incrementCount}/>
            </div>
        )
    }
}

export default UpdatedComponent(KeyUpCounterHoc, 1);