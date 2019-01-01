import React from 'react'
import {VictoryArea,VictoryChart,VictoryStack,VictoryTheme,VictoryScatter,VictoryBar} from 'victory';
const _ = require("lodash")


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    const bars = _.random(6, 10);
    return _.range(bars).map((bar) => {
      return {x: bar + 1, y: _.random(2, 10)};
    });
  }

  render() {
    return (
      <VictoryChart
        domainPadding={{ x: 20 }}
        animate={{duration: 500}}
      >
        <VictoryBar
          data={this.state.data}
          style={{
            data: { fill: "tomato", width: 12 }
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        />
      </VictoryChart>
    );
  }
}
export default App;
