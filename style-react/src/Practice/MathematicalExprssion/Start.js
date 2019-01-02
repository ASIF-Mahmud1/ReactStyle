import React from 'react'
import {JackedMathAscii, JackedMathAsciiBlock, JackedMathAsciiDelimeters,JackedMathLatex, JackedMathLatexBlock} from './MathJax.js'

// const ascii = U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))
//
// const tex = f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi

class Start extends React.Component{
  constructor(props)
  {
    super(props)
    this.state ={
      inputValue: 'S_n= (n/2)*(2a +(n-1)d'
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
        <JackedMathAscii expression= {this.state.inputValue} />
        <JackedMathAsciiDelimeters expression= {this.state.inputValue} />
        <JackedMathAsciiBlock expression= {this.state.inputValue} />
        <JackedMathLatex expression= {this.state.inputValue}  />
        <JackedMathLatexBlock expression= {this.state.inputValue} />
      </div>
    )
  }
}

export default Start;
