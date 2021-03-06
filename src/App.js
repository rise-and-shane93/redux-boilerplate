import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const message = state.message;
  return {
    message
  }
}

export default connect(mapStateToProps)(App);
