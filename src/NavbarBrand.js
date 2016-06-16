import React from 'react';
import classnames from 'classnames';
import {
  classNamePropType,
  oneOrMoreRenderableChildrenPropType,
  composePropTypes
} from './utils';

const NavbarBrand = ({ children, className, ...props }) => {
  let classes = classnames('navbar-brand', className);
  let component = null;
  if (props.href) {
    component = <a className={classes} {...props}>{children}</a>;
  } else {
    component = <span className={classes} {...props}>{children}</span>;
  }
  return component;
};

NavbarBrand.propTypes = composePropTypes(
  classNamePropType,
  oneOrMoreRenderableChildrenPropType,
  { href: React.PropTypes.string }
);

export default NavbarBrand;