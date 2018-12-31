// import React from 'react';
//
// class AppBar extends React.Component{
//
//   render()
//   {
//     return(
//       <div>
//         <h1>App Bar</h1>
//       </div>
//     )
//   }
// }
//
// export default AppBar;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
///////////////////////////////////////////////////////
// clickMenuIcon=()=>{
//   console.log('You Can Write the Code, when Menu Icon is clicked Here...')
// }

const clickMenuIcon=()=>{
  console.log('You Can Write the Code, when Menu Icon is clicked Here...')
}

// /// A Promise Function :)
//
// const yes= true;
// const callThisBeforeAlert= new Promise( (resolve, reject)=>{
//   if(yes)
//   {
//       resolve clickMenuIcon();
//   }
//
//   // else
//   // {
//   //   rek false
//   // }
// });


///////////////////////////////////////////////////////
function ButtonAppBar(props) {
  const { classes } = props; /// What does this mean?
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
            onClick={()=>{ alert("Clicked MenuIcon"); clickMenuIcon()}}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
