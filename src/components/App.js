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
      date: '',
      message: '',
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.radioButtonHandler = this.radioButtonHandler.bind(this)
    this.inputDateHandler = this.inputDateHandler.bind(this);
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
  }

  componentDidUpdate(prevState) {
    if (this.state.log !== prevState.log) {
      localStorage.setItem("log", JSON.stringify(this.state.log));
    }
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const newDay = this.state.log;
    newDay.push(this.state.status)
    this.setState({ log: newDay })
  }

  // setLog(log) {
  //   let fullLog = [];
  //   for (let i = 0; i < log.length; i++) {
  //     fullLog[i] = {
  //       ...log[i],
  //       date: this.state.date,
  //       message: this.state.message
  //     }
  //   }
    
  // }

  radioButtonHandler(e) {
    this.setState({ status: e.target.value })
  }

  inputDateHandler(e) {
    this.setState({ date: e.target.value })
  }

  inputMessageHandler(e) {
    this.setState({ message: e.target.value })
  }

  cancelButtonHandler() {
    this.setState({
      status: '',
      date: '',
      message: '',
    })
  }

  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/'
              render={(props) => <Home
                log={this.state.log}
                status={this.state.status}
              />}
            />
            <Route
              path='/edition'
              render={(props) => <Edition
                onSubmitHandler={this.onSubmitHandler}
                radioButtonHandler={this.radioButtonHandler}
                inputDateHandler={this.inputDateHandler}
                cancelButtonHandler={this.cancelButtonHandler}
                status={this.state.status}
              />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
