import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { 
    Header, 
    Home, 
    About, 
    Contact 
  } from './app/components/index';

import Store from './app/store';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
