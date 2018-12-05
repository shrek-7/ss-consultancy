import React, {Component} from 'react';
import AppProfile from './scenes/app-profile';
import Contact from './scenes/contact';
import Home from './scenes/home';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
const BASENAME = process.env.PUBLIC_URL;

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="body-holder">
          <HashRouter basename={BASENAME}>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path="/Engineering" component={AppProfile}/>
              <Route path="/Management" component={AppProfile}/>
              <Route path="/Dental" component={AppProfile}/>
              <Route path="/Medical" component={AppProfile}/>
              <Route path="/contact" component={Contact}/>
              <Redirect exact="exact" from="/" to="/home"/>
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
