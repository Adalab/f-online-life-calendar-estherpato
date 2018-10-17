import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Edition from './Edition.js';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: JSON.parse(localStorage.getItem("log")) || [],
      status: '',
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.radioButtonHandler = this.radioButtonHandler.bind(this)
  }

  componentDidUpdate(prevState) {
    if (this.state.log !== prevState.log) {
      console.log('heyy')
      localStorage.setItem("log", JSON.stringify(this.state.log));
    }
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const newDay = this.state.log;
    newDay.push(this.state.status)
    this.setState({
      log: newDay,
      status: '',
    })
  }

  radioButtonHandler(e) {
    this.setState({ status: e.target.value })
  }


  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/'
              render={(props) => <Home
                log={this.state.log}
              />}
            />
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
