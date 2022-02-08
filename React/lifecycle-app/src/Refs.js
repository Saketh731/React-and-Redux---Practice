import React from 'react';
import RefDomElm from './Refs/RefDomElm.js'
import ParentRefClassComp from './Refs/ParentRefClassComp.js';
import ParentRefForwarding from './Refs/ParentRefForwarding.js'

class Refs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mountRefDomElm: false,
            mountParentRefClassComp: false,
            mountParentRefForwarding: false
        }
    }
    showRefDomElm = ()=>{
        this.setState(function(prevState){
          return {mountRefDomElm: !prevState.mountRefDomElm};
        })
      }
      showParentRefClassComp = ()=>{
        this.setState(function(prevState){
          return {mountParentRefClassComp: !prevState.mountParentRefClassComp};
        })
      }
      showParentRefForwarding = ()=>{
        this.setState(function(prevState){
          return {mountParentRefForwarding: !prevState.mountParentRefForwarding};
        })
      }
    render(){
        return(
            <div>
                <div>
                    <button onClick={this.showRefDomElm}>RefDomElm</button>
                    <button onClick={this.showParentRefClassComp}>RefClassComp</button>
                    <button onClick={this.showParentRefForwarding}>RefForwarding</button>
                </div>
                <div>
                    {this.state.mountRefDomElm ? <RefDomElm/> : null}
                    {this.state.mountParentRefClassComp ? <ParentRefClassComp/> : null}
                    {this.state.mountParentRefForwarding ? <ParentRefForwarding/> : null}
                </div>
            </div>
        )
    }
}


export default Refs;