import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'  // what is Typography?
const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;

// import React from 'react';
//
// const Nav=()=>{
//   return(
//     <div>
//       Hi Frans !
//     </div>
//   )
// }
//
// export default Nav;
