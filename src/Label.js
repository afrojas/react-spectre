import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const Label = ({ children, className, primary, ...props }) => {
  let classes = classnames('label', { 'label-primary': primary }, className);
  return (
    <span className={classes} {...props}>{children}</span>
  );
};

Label.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    primary: React.PropTypes.bool
  }
);

export default Label;