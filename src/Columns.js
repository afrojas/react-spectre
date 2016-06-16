import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Container from './Container';
// import { ColumnClassNames } from './Column';
import {
  // allChildrenAreOneOfTypePropType,
  classNamePropType,
  oneOrMoreRenderableChildrenRequiredPropType,
  composePropTypes
} from './utils';

const ColumnsWithoutContainer = ({ children, className, ...props }) => {
  let classes = classnames('columns', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// ColumnsWithoutContainer.propTypes = composePropTypes(
//   classNamePropType,
//   allChildrenAreOneOfTypePropType(ColumnClassNames)
// );

ColumnsWithoutContainer.propTypes = composePropTypes(
  classNamePropType
);

const Columns = ({ children, withContainer, with960Container, with480Container, ...props }) => {
  const content = <ColumnsWithoutContainer {...props} >{children}</ColumnsWithoutContainer>;

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

Columns.propTypes = composePropTypes(
  classNamePropType,
  oneOrMoreRenderableChildrenRequiredPropType,
  {
    withContainer: PropTypes.bool,
    with960Container: PropTypes.bool,
    with480Container: PropTypes.bool
  }
);

export default Columns;