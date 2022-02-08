import { func } from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class PortalDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    portalKeyUp = ()=>{
        this.setState((prevState)=>{
            return {count: prevState.count+1};
        })
    }
    render(){
        // return (
        //     <>
        //         <h1>Portal Text</h1>
        //     </>
        // )
        return ReactDOM.createPortal(
            <>
                <h3>Portal Text - {this.state.count}</h3>
                <input type="text" onKeyUp={this.portalKeyUp}/>
            </>,
            document.getElementById('portal-root')
        )
    }
}
export default PortalDemo;