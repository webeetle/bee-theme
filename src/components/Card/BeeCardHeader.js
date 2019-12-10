import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import cardHeaderStyle from './BeeCardHeaderStyle';

class BeeCardHeader extends React.Component {
  render () {
    const { classes, className, children, color, plain,  action, ...rest } = this.props;

    const cardHeaderClasses = classNames({
      [classes.cardHeader]: true,
      [classes[color + 'CardHeader']]: color,
      [classes.cardHeaderPlain]: plain,
      [className]: className !== undefined
    });

    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
        {action && <div className={classes.action}>{action}</div>}
      </div>
    );
  }
}

BeeCardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'warning',
    'success', 
    'danger', 
    'info',
    'dark',
    'secondary', 
    'primary'
  ]),
  plain: PropTypes.bool
};

export default withStyles(cardHeaderStyle)(BeeCardHeader)
