import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const FormRadio = ({ children, className, name, checked, ...props }) => {
  let classes = classnames('form-radio', className);
  return (
    <label className={classes} {...props}>
      <input type='radio' name={name} checked={checked} />
      <i className='form-icon'></i> {children}
    </label>
  );
};

FormRadio.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    name: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool
  }
);

export default FormRadio;