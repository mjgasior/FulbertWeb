import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
import SamplePropTypes from './components/SamplePropTypes';
import SampleContainer from './components/SampleContainer';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextSwitched: false
    };
  }

  handleOnClick = () => {
    this.setState((prevState) => {
      return { isTextSwitched: !prevState.isTextSwitched };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.handleOnClick}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>
          I'm a styled button!
        </Button>
        <Button primary>Primary Button</Button>
        <SamplePropTypes isMainTextVisible={this.state.isTextSwitched}/>
        <SampleContainer/>
      </div>
    );
  }
}

export default App;
