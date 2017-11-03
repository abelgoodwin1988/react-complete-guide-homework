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
            <ul>
              <li>Create TWO new components: UserInput and UserOutput</li>
              <li>UserInput should hold an input element, UserOutput two paragraphs</li>
              <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
              <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
              <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
              <li>Add a method to manipulate the state (=> an event-handler method)</li>
              <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
              <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
              <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
              <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
