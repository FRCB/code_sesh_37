import React, { Component } from 'react';
import Account from './components/Account';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      credentials: { pass: 'j', user: 'j' },
      loggedIn: false
    }
    this.login = this.login.bind(this);
  }

  updateUsername(val) {
    this.setState({username: val})
  }

  login() {
    let {username, password} = this.state;
    let {pass, user} = this.state.credentials;
    if (username === user && pass === password) {
      this.setState({
        loggedIn: true
      })
    } else {
      alert('Failed login attempt. Please try again.')
    }
  }

  render() {
    return (
      <div className="App">
        <Header title='App Login' size='big'/>
        Username: 
        <input 
          onChange={(e) => this.updateUsername(e.target.value)}/>
        <br/>
        Password: 
        <input
          type='password'
          onChange={(e) => this.setState({password: e.target.value})}/>
        <br/>
        <button onClick={this.login}>Login</button>
        <hr />
        {
          this.state.loggedIn ? 
            <Account creds={this.state.credentials}  />
            : <Header title='Please login'/>
        }
      </div>
    );
  }
}

export default App;
