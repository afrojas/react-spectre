import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const InputGroupAddon = ({ children, className, sm, lg, ...props }) => {
  let classes = classnames('input-group-addon', className, { 'addon-sm': sm, 'addon-lg': lg });
  return (
    <span {...props} className={classes} >
      {children}
    </span>
  );
};

InputGroupAddon.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    sm: React.PropTypes.bool,
    lg: React.PropTypes.bool
  }
);

export default InputGroupAddon;