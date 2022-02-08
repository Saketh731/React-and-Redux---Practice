import React from 'react';
import ClickCounterHoc from './HOC/ClickCounterHoc.js';
import KeyUpCounterHoc from './HOC/KeyUpCounterHoc.js';

class HOC extends React.Component{
    render(){
        return(
            <div>
                <ClickCounterHoc name="Saketh"/>
                <KeyUpCounterHoc/>
            </div>  
        )
    }
}

export default HOC;