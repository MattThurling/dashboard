import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inventory from './views/Inventory';
import Product from './views/Product';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Inventory} />
              <Route path='/product' component={Product} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;