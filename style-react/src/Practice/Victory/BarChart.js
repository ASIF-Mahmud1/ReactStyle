import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart,VictoryAxis, VictoryTheme } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 30000},
  {quarter: 5, earnings: 20000}
];
// Note: I have wrapped the VictoryBar component in VictoryChart. Default axes are automatically
// configured to match data provided by VictoryBar
//VictoryChart is a wrapper component that plots all of its children on the same scale.
//VictoryChart also provides default axes. Import VictoryChart like so:
// Customizing Axes:
// modify the tick labels on the axes to be a little more descriptive.
//We can do this by adding and configuring VictoryAxis components to our chart.
// You can Add a Theme by  importing VictoryTheme and adding a theme prop to VictoryChart.
//  Themes should always be applied to the outermost wrapper component in a chart.

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
      <VictoryBar
        data={data}
         // data accessor for x values
         x="quarter"
         // data accessor for y values
         y="earnings"
      />
    </VictoryChart>
    )
  }
}

export default BarChart;
