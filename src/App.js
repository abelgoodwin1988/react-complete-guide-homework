import React, { Component } from 'react';

import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    username: 'Rafael'
  }

  handleChangeUsername = event => {
    this.setState(
      {
        username: event.target.value
      }
    );
  }

  render() {
    return (
      <section className="App container is-full">
        <div className="columns">
          <div className="column">
            <section className="hero is-primary">
              <div class="hero-body">
                <div className="Container">
                  <h1 className="title">
                    <UserOutput username={this.state.username}/>
                  </h1>
                  <h2 className="subtitle">
                    <UserInput
                      change={this.handleChangeUsername}
                      input={this.state.username}
                    />
                  </h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
