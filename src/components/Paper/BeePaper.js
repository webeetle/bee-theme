import React from 'react'
import BeePaperStyle from './BeePaperStyle'
import { withStyles, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class BeePaper extends React.Component {
  render () {
    const { gradient, classes, children, ...rest } = this.props

    const paperClasses = classNames({
      root: true,
      [classes[gradient]]: gradient
    })

    return (<Paper className={paperClasses} {...rest}>{children}</Paper>)
  }
}

BeePaper.propTypes = {
  gradient: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default withStyles(BeePaperStyle)(BeePaper)
