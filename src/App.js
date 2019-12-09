import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inventory from './views/Inventory';
import Scan from './views/Scan';
import Product from './views/Product';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Inventory} />
              <Route path='/product' component={Product} />
              <Route path='/scan' component={Scan} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;