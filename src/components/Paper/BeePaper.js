import React from 'react'
import BeePaperStyle from './BeePaperStyle'
import { withStyles, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

class BeePaper extends React.Component {
  render () {
    const { classes, children, ...rest } = this.props

    return (<Paper className={classes.root} {...rest}>{children}</Paper>)
  }
}

BeePaper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default withStyles(BeePaperStyle)(BeePaper)
