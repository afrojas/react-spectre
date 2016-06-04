import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';
import Link from './Link';

const Button = ({ children, className, loading, sStyle, href, lg, sm, block, to, ...props }) => {
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
  if (href || to) buttonStyle = 'link';
  if (sStyle) buttonStyle = sStyle;
  if (buttonStyle) classes = classnames(classes, `btn-${buttonStyle}`);
  props.className = classes;

  let toReturn = null;
  if (href) {
    toReturn = <a href={href} {...props}>{children}</a>;
  } else if (to) {
    toReturn = <Link to={to} {...props}>{children}</Link>;
  } else {
    toReturn = <button {...props}>{children}</button>;
  }

  return toReturn;
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
    block: PropTypes.bool,
    to: PropTypes.string
  }
);

export default Button;