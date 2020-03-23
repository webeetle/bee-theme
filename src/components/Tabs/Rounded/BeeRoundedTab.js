import React from 'react'
import RoundedTabStyle from './RoundedTabStyle'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

class BeeRoundedTab extends React.Component {
  render () {
    return (<Tab {...this.props} />)
  }
}

export default withStyles(RoundedTabStyle)(BeeRoundedTab)
