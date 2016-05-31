import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';

const Table = ({ children, className, striped, hover, ...props }) => {
  let classes = classnames(
    'table',
    {
      'table-striped': striped,
      'table-hover': hover
    },
    className
  );
  return (
    <table className={classes} {...props}>
      {children}
    </table>
  );
};

Table.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    'striped': PropTypes.bool,
    'hover': PropTypes.bool
  }
);

export default Table;