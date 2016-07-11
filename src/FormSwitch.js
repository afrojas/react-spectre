import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const FormSwitch = ({ children, className, ...props }) => {
  let classes = classnames('form-switch', className);
  return (
    <label className={classes}>
      <input type='checkbox' {...props} />
      <i className='form-icon'></i> {children}
    </label>
  );
};

FormSwitch.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType
);

export default FormSwitch;