import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import cardFooterStyle from './BeeCardFooterStyle';

class BeeCardFooter extends React.Component {
  render () {
    const { classes, className, children, ...rest } = this.props

    const cardFooterClasses = classNames({
      [classes.cardFooter]: true,
      [className]: className !== undefined
    })

    return (
      <div className={cardFooterClasses} {...rest}>
        {children}
      </div>
    )
  }
}

BeeCardFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default withStyles(cardFooterStyle)(BeeCardFooter)
