import React from 'react';
import classnames from 'classnames';
import { classNamePropType, oneOrMoreRenderableChildrenPropType, composePropTypes } from './utils';

const Form = ({ children, className, horizontal, ...props }) => {
  let classes = classnames(className, { 'form-horizontal': horizontal });
  return (
    <form {...props} className={classes} >
      {children}
    </form>
  );
};

Form.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    horizontal: React.PropTypes.bool
  }
);

export default Form;