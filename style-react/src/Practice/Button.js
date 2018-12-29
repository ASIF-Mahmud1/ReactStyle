import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button}
        onClick={()=>{alert('You Clicked Default Button')}}
        >
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}
         onClick={()=>{alert('You Clicked Primary Button')}}
         >
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}
         onClick={()=>{alert('You Clicked Secondary Button')}}
         >
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}
         onClick={()=>{alert('You Clicked Disabled Button')}}
         >
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}
         onClick={()=>{alert('You Clicked Link Button')}}
         >
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}
           onClick={()=>{alert('You Clicked Upload Button')}}
           >
          Upload
        </Button>
      </label>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
