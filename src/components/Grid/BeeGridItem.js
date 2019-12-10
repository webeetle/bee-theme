import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginBottom: 10,
    flexBasis: "auto"
  }
}

class BeeGridItem extends React.Component {
  render () {
    const { classes, children, className, ...rest } = this.props;

    return (
      <Grid item {...rest} className={classes.grid + " " + className}>
        {children}
      </Grid>
    );
  }
}

export default withStyles(style)(BeeGridItem);