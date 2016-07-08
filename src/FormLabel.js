import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const FormLabel = ({ children, className, ...props }) => {
  let classes = classnames('form-label', className);
  return (
    <label {...props} className={classes} >
      {children}
    </label>
  );
};

FormLabel.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    'for': React.PropTypes.string
  }
);

export default FormLabel;