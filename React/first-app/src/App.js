import React from 'react';
import Nav from './Nav';
import About from './About';
import Users from './Users';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDetails from './UserDetails.js';


import {Provider} from 'react-redux';
import store from './redux/cake/store.js'
import CakeContainer from './components/CakeContainer.js';
import HooksCakeContainer from './components/HooksCakeContainer.js';
import IceCreamContainer from './components/IceCreamContainer.js';
import NewCakeContainer from './components/NewCakeContainer.js';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer.js';
import FormContainer from './FormContainer.js';

function App(props) {
  const a = 2;
  const str = "Saketh";
  return (
    <Provider store={store}>
        <Router>
          <div className="app"> 
            <Nav />
            <FormContainer/>
            <Switch>
              <Route path="/" exact><Home/></Route>
              <Route path="/about"><About val="2"/></Route>
              <Route path="/users" exact component={Users}/>
              <Route path="/users/:id" component={UserDetails}/>
              <Route path="/cakeshop" component={CakeContainer}/>
              <Route path="/hookscakeshop" component={HooksCakeContainer}/>
              <Route path="/icecreamshop" component={IceCreamContainer}/>
              <Route path="/newcakecontainer" component={NewCakeContainer}/>
              <Route path="/itemcontainercake" exact><ItemContainer cake/></Route>
              <Route path="/itemcontainericecream" exact><ItemContainer/></Route>
              <Route path="/usercontainer" component={UserContainer}/>
            </Switch>
          </div>
      </Router>
    </Provider>
  );
}
const Home = ()=>(
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
