import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent.js';
import CharComponent from './components/CharComponent';
import 'bulma/css/bulma.css';


class App extends Component {
  state = {
    inputValue: null
  }

  changeInput = (event) => {
    const newValue = event.target.value;
    this.setState({inputValue:newValue});
  }

  deleteInputValueHandler = (inputIndex) => {
    const newState = this.state.inputValue.split('');
    newState.splice(inputIndex,1);
    let rejoinedState = newState.join('');
    this.setState({inputValue:rejoinedState});
  }

  render() {

    let inputValues = null;
    let inputLength = null;
    if (this.state.inputValue) {
      inputValues = this.state.inputValue.split('');
      inputLength = this.state.inputValue.length;
    }

    let outputValues = null;
    // console.log(inputValues);

    if (inputValues) {
      outputValues =
        inputValues.map((value,index) => {
          return <CharComponent
            value={value}
            click={() => this.deleteInputValueHandler(index)}
            key={index} />
        });
    }
    // console.log(outputValues);

    return (
      <div className="App">
        <div className="section">
          <input
            className="input is-info"
            onChange={(event) => this.changeInput(event)}
            value={this.state.inputValue ? this.state.inputValue : ''}>

          </input>
          <p>length: {inputLength} </p>
          <ValidationComponent
            inputValue= {inputLength}
          />
          <div className="section">
            <div className="columns is-multiline">
              {outputValues}
            </div>
          </div>
        </div>

        <section className="section">
          <div className="box">
            <ol>
              <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
              <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
              <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
              <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
              <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
              <li>When you click a CharComponent, it should be removed from the entered text.</li>
            </ol>
            <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
