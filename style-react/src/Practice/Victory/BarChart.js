import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart,VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

// Stack Multiple Bar Charts...
// Wrap all four VictoryBar components with VictoryStack
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 30000},
  {quarter: 5, earnings: 20000}
];

const data2 = [
  {quarter: 1, earnings: 1300},
  {quarter: 2, earnings: 1650},
  {quarter: 3, earnings: 2450},
  {quarter: 4, earnings: 4000},
  {quarter: 5, earnings: 3000}
];

const data3 = [
  {quarter: 1, earnings: 2000},
  {quarter: 2, earnings: 5050},
  {quarter: 3, earnings: 3550},
  {quarter: 4, earnings: 2000},
  {quarter: 5, earnings: 7000}
];


class BarChart extends React.Component{

  render()
  {
    return(
    <VictoryChart
      // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
        theme={VictoryTheme.material}
        >
          <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4,5]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => (`$${x / 1000}k`)}
            />
      <VictoryStack
         colorScale={"warm"}
      >
        <VictoryBar
          data={data}
           // data accessor for x values
           x="quarter"
           // data accessor for y values
           y="earnings"
        />
        <VictoryBar
          data={data2}
           // data accessor for x values
           x="quarter"
           // data accessor for y values
           y="earnings"
        />
        <VictoryBar
          data={data3}
           // data accessor for x values
           x="quarter"
           // data accessor for y values
           y="earnings"
        />
      </VictoryStack>
    </VictoryChart>
    )
  }
}

export default BarChart;
