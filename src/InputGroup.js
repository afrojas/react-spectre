import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const InputGroup = ({ children, className, success, danger, ...props }) => {
  let classes = classnames('input-group', className, { 'has-success': success, 'has-danger': danger });
  return (
    <div {...props} className={classes} >
      {children}
    </div>
  );
};

InputGroup.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    success: React.PropTypes.bool,
    danger: React.PropTypes.bool
  }
);

export default InputGroup;