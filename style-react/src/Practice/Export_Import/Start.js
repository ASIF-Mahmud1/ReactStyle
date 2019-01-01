import React from 'react';
import { Color, Animal} from './Shapes'
class Start extends React.Component{
  render()
  {
    return(
      <div>
        Starting Point
        <Color name="red"/>
        <Color name="green"/>
        <Animal name= "Lion" />
      </div>
    )
  }
}

export default Start
