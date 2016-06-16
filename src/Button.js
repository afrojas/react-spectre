import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';
import Link from './Link';

const Button = ({ children, className, loading, href, lg, sm, block, to, inputGroup, primary, clear, link, ...props }) => {
  if (href || to) link = true;
  let classes = classnames(
    'btn',
    {
      'loading': loading,
      'btn-lg': lg,
      'btn-sm': sm,
      'btn-block': block,
      'input-group-btn': inputGroup,
      'btn-primary': primary,
      'btn-clear': clear,
      'btn-link': link && !primary
    },
    className
  );
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
    href: PropTypes.string,
    lg: PropTypes.bool,
    sm: PropTypes.bool,
    block: PropTypes.bool,
    to: PropTypes.string,
    inputGroup: PropTypes.bool,
    primary: PropTypes.bool,
    clear: PropTypes.bool,
    link: PropTypes.bool
  }
);

export default Button;