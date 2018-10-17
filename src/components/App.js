import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Edition from './Edition.js';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: [],
      status: '',
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.radioButtonHandler = this.radioButtonHandler.bind(this)
  }

  onSubmitHandler(e) {
    e.preventDefault();
      const newDay = this.state.log;
      newDay.push(this.state.status)
      this.setState({ log: newDay }, () => console.log('log', this.state.log))
  }

  radioButtonHandler(e) {
    this.setState({ status: e.target.value }, () => console.log('Estado', this.state.status))
  }


  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/edition'
              render={(props) => <Edition
                onSubmitHandler={this.onSubmitHandler}
                radioButtonHandler={this.radioButtonHandler}
              />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
