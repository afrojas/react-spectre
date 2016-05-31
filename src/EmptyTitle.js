import React from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';

const EmptyTitle = ({ children, className, ...props }) => {
  let classes = classnames('empty-title', className);
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

EmptyTitle.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType
);

export default EmptyTitle;