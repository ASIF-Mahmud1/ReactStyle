import React from 'react';

class Color extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: this.props.name,
      color: 'white',
      fontSize: '20px',
      height: '100px',
      width: '100px'
    }
    return (
      <div style={divStyle}>{this.props.name}</div>
    )
  }
}


class Animal extends React.Component {
  render() {
    const divStyle = {
      fontSize: '20px',
      height: '100px',
      width: '100px',
      border: '1px solid black',
      borderRadius: '50%'
    }
    return (
      <div style={divStyle}>{this.props.name}</div>
    )
  }
}

export { Color, Animal}
