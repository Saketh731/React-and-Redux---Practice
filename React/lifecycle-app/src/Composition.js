import React from 'react';
import ClickCounterComp from './Composition/ClickCounterComp.js';
import KeyUpCounterComp from './Composition/KeyUpCounterComp.js';

class Composition extends React.Component{
    render(){
        return(
            <div>
                <ClickCounterComp/>
                <KeyUpCounterComp/>
            </div>
        )
    }
}
export default Composition;