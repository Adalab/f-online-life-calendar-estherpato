import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Edition from './Edition.js';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: []
    }
  }


  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/edition' component={Edition} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
