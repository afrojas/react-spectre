import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const FormSelect = ({ children, className, sm, lg, ...props }) => {
  let classes = classnames(
    'form-select',
    className,
    {
      'select-sm': sm,
      'select-lg': lg
    }
  );
  return (
    <select className={classes} {...props}>
      {children}
    </select>
  );
};

FormSelect.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    sm: React.PropTypes.bool,
    lg: React.PropTypes.bool
  }
);

export default FormSelect;