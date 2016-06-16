import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';

const ButtonGroup = ({ children, className, block }) => {
  let classes = classnames(
    'btn-group',
    { 'btn-group-block': block },
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    block: PropTypes.bool
  }
);

export default ButtonGroup;