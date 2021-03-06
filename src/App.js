import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inventory from './views/Inventory'
import Scan from './views/Scan'
import Product from './views/Product'
import Clean from './views/Clean'
import OCR from './views/OCR'

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Inventory} />
              <Route path='/product' component={Product} />
              <Route path='/scan' component={Scan} />
              <Route path='/clean' component={Clean} />
              <Route path='/ocr' component={OCR} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App