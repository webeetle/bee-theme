import React from 'react'
import PropTypes from 'prop-types'
import RoundedTabsStyle from './RoundedTabsStyle'
import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'

class BeeRoundedTabs extends React.Component {
  render () {
    const { children, ...otherProps } = this.props

    return (
      <Tabs {...otherProps}>
        {children}
      </Tabs>
    )
  }
}

BeeRoundedTabs.propTypes = {
  children: PropTypes.object.isRequired
}

export default withStyles(RoundedTabsStyle)(BeeRoundedTabs)
