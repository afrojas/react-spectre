import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';

const Button = ({ children, className, loading, sStyle, href, lg, sm, block, ...props }) => {
  let classes = classnames(
    'btn',
    {
      'loading': loading,
      'btn-lg': lg,
      'btn-sm': sm,
      'btn-block': block
    },
    className
  );
  let buttonStyle = null;
  if (href) buttonStyle = 'link';
  if (sStyle) buttonStyle = sStyle;
  if (buttonStyle) classes = classnames(classes, `btn-${buttonStyle}`);
  props.className = classes;
  return href ? <a href={href} {...props}>{children}</a> : <button {...props}>{children}</button>;
};

Button.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    loading: PropTypes.bool,
    sStyle: PropTypes.string,
    href: PropTypes.string,
    lg: PropTypes.bool,
    sm: PropTypes.bool,
    block: PropTypes.bool
  }
);

export default Button;