import React from 'react'
import { VictoryBar, VictoryChart,VictoryAxis, VictoryTheme, VictoryStack,VictoryLine } from 'victory';
const number= 5
let x= [1,2,3,4,5,6,7,8,9,10];
let y= x.map((item,key)=>{
   return item*item
})
class Quadratic extends React.Component{

  render()
  {
    console.log("x is : ", x);
    console.log("y is : ", y);
    return(
      <div>
        Quadratic Function Here we go...
      </div>
    )
  }
}
//export default Quadratic;
//////////////////////////////////////


  class BarChart extends React.Component{

    render()
    {
      return(
        <VictoryChart>
            <VictoryLine
              samples={50000}
              style={{data:
                {stroke: "red", strokeWidth: 4}
              }}
              y={(data) => Math.sin(2 * Math.PI * data.x)}
            />

            <VictoryLine
              samples={10}
              style={{data:
                {stroke: "blue", strokeWidth: 4}
              }}
              y={(data) => Math.cos(2 * Math.PI * data.x)}
            />
          </VictoryChart>
      )
    }
  }
export default BarChart
