import './App.css';
import Counter from './Counter.js';
import Form from './Form.js';
import Hooks from './Hooks.js';
import React from 'react';
import LiftingStateUp from './LiftingStateUp.js';
import './counter.css';
import TypeChecking from './TypeChecking';
import Composition from './Composition.js'
import Inheritance from './Inheritance.js';
import HOC from './HOC.js';
import Refs from './Refs.js';
import ManagerContext from './Context/ManagerContext.js';
import FragmentAndProtals from './FragmentAndPortals.js';
// import TypeCheckingFlow from './TypeCheckingFlow';


class App extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      mountCounter: false,
      mountForms: false,
      mountHooks: false,
      mountLift: false,
      mountTypeChecking: false,
      mountTypeCheckingFlow: false,
      mountComposition: false,
      mountInheritance: false,
      mountHOC: false,
      mountRefs: false,
      mountContext: false,
      mountFragmentAndPortals: false, 
      multiply: 2
    };
    this.mountCounter = ()=>{
      this.setState(function(state,props){
        return {mountCounter: !state.mountCounter};
      })
    }
    this.multiplyByTwo = ()=>{
      this.setState(function(state, props){
        return {multiply: state.multiply*2};
      })
    }
  }
  showFroms = ()=>{
    this.setState(function(state){
      return {mountForms: !state.mountForms};
    })
  }

  showHooks = ()=>{
    this.setState(function(state){
      return {mountHooks: !state.mountHooks};
    })
  }
  showLift = ()=>{
    this.setState(function(state){
      return {mountLift: !state.mountLift};
    })
  }

  showTypeChecking = ()=>{
    this.setState(function(state){
      return {mountTypeChecking: !state.mountTypeChecking};
    })
  }
  showTypeCheckingFlow = ()=>{
    this.setState(function(state){
      return {mountTypeCheckingFlow: !state.mountTypeCheckingFlow};
    })
  }
  showComposition = ()=>{
    this.setState(function(state){
      return {mountComposition: !state.mountComposition};
    })
  }
  showInheritance = ()=>{
    this.setState(function(state){
      return {mountInheritance: !state.mountInheritance};
    })
  }
  showHOC = ()=>{
    this.setState(function(state){
      return {mountHOC: !state.mountHOC};
    })
  }
  showRefs = ()=>{
    this.setState(function(state){
      return {mountRefs: !state.mountRefs};
    })
  }
  showContext = ()=>{
    this.setState(function(state){
      return {mountContext: !state.mountContext};
    })
  }
  showFragmentAndPortals = ()=>{
    this.setState(function(state){
      return {mountFragmentAndPortals: !state.mountFragmentAndPortals};
    })
  }
  // unmountCounter = ()=>{
  //   this.setState(function(state){
  //     return {mount: false};
  //   })
  // }
  componentDidCatch(error, info){
    console.log("componentDidCatch");
    this.setState({error, info});
}

  render(){
    if(this.state.error){
      return (
        <h1>{this.state.error.toString()}</h1>
      )
    }
    return(
      <div>
        <div>
        <button onClick={this.mountCounter} >Lifecycle</button>
        {/* <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button> */}
        {/* <button onClick={this.multiplyByTwo}>Multiply</button> */}
        <button onClick={this.showFroms}>Forms</button>
        <button onClick={this.showHooks}>Hooks</button>
        <button onClick={this.showLift}>LiftingStateUp</button>
        <button onClick={this.showTypeChecking}>TypeChecking</button>
        <button onClick={this.showTypeCheckingFlow}>TypeCheckingFlow</button>
        <button onClick={this.showComposition}>Composition</button>
        <button onClick={this.showInheritance}>Inheritance</button>
        <button onClick={this.showHOC}>HOC</button>
        <button onClick={this.showRefs}>Refs</button>
        <button onClick={this.showContext}>Context</button>
        <button onClick={this.showFragmentAndPortals}>Fragments And Portals</button>
        </div>
        
        

        <div>
        {this.state.mountCounter ? <Counter multiply={this.state.multiply}/> : null}        
       {this.state.mountForms ? <Form /> : null}
       {this.state.mountHooks ? <Hooks/> : null}       
       {this.state.mountLift ? <LiftingStateUp/> : null}      
       {this.state.mountTypeChecking ? <TypeChecking/> : null}
       {this.state.mountComposition ? <Composition/> : null}
       {this.state.mountHOC ? <HOC/> : null}
       {this.state.mountRefs ? <Refs/> : null}
       {this.state.mountContext ? <ManagerContext/> : null}
       {this.state.mountFragmentAndPortals ? <FragmentAndProtals/> : null}
       {/* {this.state.mountInheritance ? <Inheritance/> : null} */}
       {/* {this.state.mountTypeCheckingFlow ? <TypeCheckingFlow/> : null} */}
        </div>      
      </div>
    )
  }
}

export default App;
