import React from "react";
import propTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    width: "auto"
  }
};

class BeeGridContainer extends React.Component {
  render () {
    const { classes, children, className, ...rest } = this.props;

    return (
      <Grid container {...rest} className={classes.grid + " " + className}>
        { children }
      </Grid>
    );
  }
}

BeeGridContainer.defaultProps = {
  className: ""
};

BeeGridContainer.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.node,
  className: propTypes.string
};

export default withStyles(style)(BeeGridContainer);
