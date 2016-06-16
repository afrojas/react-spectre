import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const FormCheckbox = ({ children, className, ...props }) => {
  let classes = classnames('form-checkbox', className);
  return (
    <label className={classes} {...props}>
      <input type='checkbox' />
      <i className='form-icon'></i> {children}
    </label>
  );
};

FormCheckbox.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType
);

export default FormCheckbox;