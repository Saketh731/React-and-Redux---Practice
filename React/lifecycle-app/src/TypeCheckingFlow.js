import React, { Component } from 'react';

// type TestProps = {
//     str: string
// }

class Test extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.str}</h1>
            </div>
        );
    }
}

class TypeCheckingFlow extends React.Component{
    render(){
        return(
            <Test str="gf"/>
        )
    }
}

export default TypeCheckingFlow;