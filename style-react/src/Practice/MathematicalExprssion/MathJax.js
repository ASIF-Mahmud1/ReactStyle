import React from 'react'
import MathJax from 'react-mathjax2'

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'

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

//  Inline display of AsciiMath without delimiters
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


// Inline display of AsciiMath wrapped in delimiters
// import MathJax from 'react-mathjax2'
//
// const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
// const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$ symbols like $$${ascii}$$`
//
// module.exports = () => {
//     return (
//         <MathJax.Context
//             input='ascii'
//             onLoad={ () => console.log("Loaded MathJax script!") }
//             onError={ (MathJax, error) => {
//                 console.warn(error);
//                 console.log("Encountered a MathJax error, re-attempting a typeset!");
//                 MathJax.Hub.Queue(
//                   MathJax.Hub.Typeset()
//                 );
//             } }
//             script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
//             options={ {
//                 asciimath2jax: {
//                      useMathMLspacing: true,
//                      delimiters: [["$$","$$"]],
//                      preview: "none",
//                 }
//             } }
//         >
//             <MathJax.Text text={ content }/>
//         </MathJax.Context>
//     );
// }

// Block display of AsciiMath
// import MathJax from 'react-mathjax2'
//
// const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
//
// module.exports = () => {
//     return (
//         <div>
//             <MathJax.Context input='ascii'>
//                 <div>
//                     <MathJax.Node>{ascii}</MathJax.Node>
//                 </div>
//             </MathJax.Context>
//         </div>
//     );
// }
// Inline display of LaTeX
// import MathJax from 'react-mathjax2'
//
// const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`
//
// module.exports = () => {
//     return (
//         <div>
//             <MathJax.Context input='tex'>
//                 <div>
//                     This is an inline math formula: <MathJax.Node inline>{'a = b'}</MathJax.Node>
//                 </div>
//             </MathJax.Context>
//         </div>
//     );
// }
// Block display of LaTeX
// import MathJax from 'react-mathjax2'
//
// const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`
//
// module.exports = () => {
//     return (
//         <div>
//             <MathJax.Context input='tex'>
//                 <div>
//                     <MathJax.Node>{tex}</MathJax.Node>
//                 </div>
//             </MathJax.Context>
//         </div>
//     );
// }

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// API
// MathJax.Context props
// script (String)
// Loads specified link with MathJax library.
// Default: https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML
// input (String)
// Sets type of input.
// Options: tex | ascii
// Default: ascii
// delay (Number)
// Sets delay between updates.
// Default: 0 (the main difference between this library and react-mathjax from SamyPesse)
// options (Object)
// Sets MathJax configuration.
// Default: Official MathJax configuration
// onLoad (Function)
// Triggered after MathJax script finishes loading (but BEFORE children are allowed to render if noGate is set to false)
// onError (Function)
// Triggered when any Math Processing Error occurs
// noGate (Boolean)
// Defaults to false, controls whether to disallow rendering of children components until the MathJax script has finished loading
