import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cardBodyStyle from './BeeCardBodyStyle'

class BeeCardBody extends React.Component {
  render () {
    const { noPadding, classes, className, children, ...rest } = this.props

    const cardBodyClasses = classNames({
      [classes.cardBody]: true,
      [classes.cardBodyNoPadding]: noPadding,
      [className]: className !== undefined
    })

    return (
      <div className={cardBodyClasses} {...rest}>
        {children}
      </div>
    )
  }
}

BeeCardBody.defaultProps = {
  noPadding: false
}

BeeCardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  noPadding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

export default withStyles(cardBodyStyle)(BeeCardBody)
