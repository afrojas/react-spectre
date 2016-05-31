import React from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';

const EmptyMeta = ({ children, className, ...props }) => {
  let classes = classnames('empty-meta', className);
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

EmptyMeta.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType
);

export default EmptyMeta;