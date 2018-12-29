import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class One extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React From ONe
          </a>
        </header>
      </div>
    );
  }
}

export default One;

// import React, { Component } from 'react';
// import styled from 'styled-components';
//
// // const Title = styled.h1`
// //   color: goldenrod;
// // `;
//
// const mainColor = 'indianred'
//
// const Title = styled.h1`
//   color: ${props => props.color ||  'goldenrod'}
// `;
//
// class One extends Component {
//   render() {
//     return (
//      <Title color={mainColor}>Mystagram</Title>
//     );
//   }
// }
//
// export default One;
