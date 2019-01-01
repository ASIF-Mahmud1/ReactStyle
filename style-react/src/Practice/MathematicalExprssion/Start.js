import React from 'react'
import JackedMath from './MathJax.js'

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'

class Start extends React.Component{
  constructor(props)
  {
    super(props)
    this.state ={
      inputValue: 'Nothing'
    }
  }

  handleChange= (event)=>{
    this.setState({
      inputValue:event.target.value
    },()=>{console.log('Input is ', this.state.inputValue)} )
  }
  render()
  {
    return(
      <div>

        <label>
          Write Your Equation :
          <input   type="text"  onChange={this.handleChange}/>
        </label>
        <p>Your Beautiful Equation is : {this.state.inputValue}</p>
        <JackedMath expression= {this.state.inputValue} />
      </div>
    )
  }
}

export default Start;
