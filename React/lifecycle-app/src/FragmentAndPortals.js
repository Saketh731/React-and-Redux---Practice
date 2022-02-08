import { func } from 'prop-types';
import React, { Fragment } from 'react';
import FragmentDemo from './Fragment&Portal/FragmentDemo.js';
import PortalDemo from './Fragment&Portal/PortalDemo.js';

class FragmentAndProtals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mountFragment: false,
            mountPortal: false,
            count: 0
        }
    }
    showFragment = ()=>{
        this.setState(function(state){
          return {mountFragment: !state.mountFragment};
        })
      }
      showPortal = ()=>{
        this.setState(function(state){
          return {mountPortal: !state.mountPortal};
        })
      }
      onKeyUpHandler = ()=>{
        this.setState(function(prevState){
            return {count: prevState.count+1};
        })
      }
    render(){
        return(
            <div onKeyUp={this.onKeyUpHandler}>
                <div>
                    <button onClick={this.showFragment}>Fragments</button>
                    <button onClick={this.showPortal}>Portals</button>
                </div>
                <div>
                    {this.state.mountFragment ? <FragmentDemo/> : null}
                    {this.state.mountPortal ? <PortalDemo/> : null}
                </div>
                Parent Count - {this.state.count}
            </div>
        )
    }
}

export default FragmentAndProtals;