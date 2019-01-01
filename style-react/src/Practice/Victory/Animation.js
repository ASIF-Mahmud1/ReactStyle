import React from 'react'
import {VictoryArea,VictoryChart,VictoryStack,VictoryTheme,VictoryScatter} from 'victory';
const _ = require("lodash")
///////////////////////////////////////////////////////

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scatterData: this.getScatterData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => { // what does window.setInterval Does?
      this.setState({
        scatterData: this.getScatterData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }


  getScatterData() {
    const colors =[
      "violet", "cornflowerblue", "gold", "orange",
      "turquoise", "tomato", "greenyellow"
    ];
    const symbols = [
      "circle", "star", "square", "triangleUp",
      "triangleDown", "diamond", "plus"
    ];
    return _.range(25).map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: _.random(10, 50),
        y: _.random(2, 100),
        size: _.random(8) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[_.random(0, 6)],
        opacity: 0.6
      };
    });
  }

  render() {
    return (
      <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
        <VictoryScatter
          data={this.state.scatterData}
          style={{
            data: {
              fill: (d) => d.fill,
              opacity: (d) => d.opacity
            }
          }}
        />
      </VictoryChart>
    );
  }
}
export default App;
