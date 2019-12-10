import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import cardStyle from './BeeCardStyle';

class BeeCard extends React.Component {
  render () {
    const { classes, className, children, plain, carousel, ...rest } = this.props
    const cardClasses = classNames({
      [classes.card]: true,
      [classes.cardPlain]: plain,
      [classes.cardCarousel]: carousel,
      [className]: className !== undefined
    })

    return (
      <div className={cardClasses} {...rest}>
        {children}
      </div>
    )
  }
};

BeeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool
};

export default withStyles(cardStyle)(BeeCard);