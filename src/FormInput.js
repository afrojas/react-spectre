import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const FormInput = ({ children, className, success, danger, textarea, sm, lg, ...props }) => {
  let classes = classnames(
    'form-input',
    className,
    {
      'is-success': success,
      'is-danger': danger,
      'input-lg': lg,
      'input-sm': sm
    });
  if (textarea) {
    return <textarea className={classes} {...props}></textarea>;
  } else {
    return (
      <input {...props} className={classes} >
        {children}
      </input>
    );
  }
};

FormInput.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    success: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    sm: React.PropTypes.bool,
    lg: React.PropTypes.bool,
    textarea: React.PropTypes.bool
  }
);

export default FormInput;