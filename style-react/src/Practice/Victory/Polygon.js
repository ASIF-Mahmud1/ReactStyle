import React from 'react';
import {VictoryChart, VictoryScatter } from 'victory';

const SAMPLE_DATA = [
	{x: 2, y: 1},
	{x: 3, y: 5},
	{x: 6, y: 3},
  {x: 8, y: 4},
];

class Polygon extends React.Component {
  getPoints(data, scale) {
    return data.reduce((pointStr, {x, y}) => // what does reduce function does?
			`${pointStr} ${scale.x(x)},${scale.y(y)}`
		, '');
  }

  render() {
    // data and style are explicitly supplied to the Polygon component
    // scale is provided by VictoryChart
    const { data, style, scale } = this.props; // Never understood what does this line means......
    const points = this.getPoints(data, scale);
    return <polygon points={points} style={style}/>;
  }
}

class App extends React.Component {
  render() {
    return <VictoryChart
      height={400}
      width={400}
      domain={[-10, 10]}
    >
      <Polygon
        data={SAMPLE_DATA}
        style={{ fill: "tomato", opacity: 0.5 }}
        
      />
      <VictoryScatter
        data={SAMPLE_DATA}
      />
    </VictoryChart>;
  }
}

export default App;
