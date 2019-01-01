import React from 'react'
import MathJax from 'react-mathjax2'

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'

// module.exports = () => {
//     return (
//         <div>
//             <MathJax.Context input='ascii'>
//                 <div>
//                     This is an inline formula written in AsciiMath: <MathJax.Node inline>{ ascii }</MathJax.Node>
//                 </div>
//             </MathJax.Context>
//         </div>
//     );
// }

class JackedMath extends React.Component{

  render()
  {
    return (
        <div>
            <MathJax.Context input='ascii'>
                <div>
                    This is an inline formula written in AsciiMath: <MathJax.Node inline>{ ascii }</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
  }
}

export default JackedMath;
