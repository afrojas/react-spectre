import React from 'react';
import classnames from 'classnames';
import {
  classNamePropType,
  oneOrMoreRenderableChildrenPropType,
  composePropTypes
} from './utils';

const NavbarBrand = ({ children, className, ...props }) => {
  let classes = classnames('navbar-brand', className);
  if (!props.href) props.href = '#';
  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
};

NavbarBrand.propTypes = composePropTypes(
  classNamePropType,
  oneOrMoreRenderableChildrenPropType,
  { href: React.PropTypes.string }
);

export default NavbarBrand;