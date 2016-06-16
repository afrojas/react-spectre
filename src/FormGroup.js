import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const FormGroup = ({ children, className, success, danger, ...props }) => {
  let classes = classnames('form-group', className, { 'has-success': success, 'has-danger': danger });
  return (
    <div {...props} className={classes} >
      {children}
    </div>
  );
};

FormGroup.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    success: React.PropTypes.bool,
    danger: React.PropTypes.bool
  }
);

export default FormGroup;