import React from 'react';
import classnames from 'classnames';
import {
  classNamePropType,
  oneOrMoreRenderableChildrenPropType,
  composePropTypes
} from './utils';

const NavbarSection = ({ children, className, ...props }) => {
  let classes = classnames('navbar-section', className);
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

NavbarSection.propTypes = composePropTypes(
  classNamePropType,
  oneOrMoreRenderableChildrenPropType
);

export default NavbarSection;