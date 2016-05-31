import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Container from './Container';
import {
  allChildrenAreOneOfTypePropType,
  classNamePropType,
  oneOrMoreRenderableChildrenPropType,
  composePropTypes
} from './utils';

const NavbarWithoutContainer = ({ children, className, ...props }) => {
  let classes = classnames('navbar', className);

  return (
    <header className={classes} {...props}>
      {children}
    </header>
  );
};

NavbarWithoutContainer.propTypes = composePropTypes(
  classNamePropType,
  allChildrenAreOneOfTypePropType(['NavbarSection'])
);

const Navbar = ({ children, withContainer, with960Container, with480Container, ...props }) => {
  const content = <NavbarWithoutContainer {...props}>{children}</NavbarWithoutContainer>;

  if (withContainer || with960Container || with480Container) {
    withContainer = withContainer ? withContainer : {};
    if (with960Container) withContainer.size = 960;
    if (with480Container) withContainer.size = 480;
    return (
      <Container {...withContainer}>
        {content}
      </Container>
    );
  }

  return content;
};

Navbar.propTypes = composePropTypes(
  classNamePropType,
  oneOrMoreRenderableChildrenPropType,
  {
    withContainer: PropTypes.bool,
    with960Container: PropTypes.bool,
    with480Container: PropTypes.bool
  }
);

export default Navbar;