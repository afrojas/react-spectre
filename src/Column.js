import React from 'react';
import classnames from 'classnames';
import {
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  stringOrNumberPropTypeForKeys,
  composePropTypes
} from './utils';

const Column = ({ children, className, xs, sm, md, size, ...props }) => {
  let classes = classnames(
    'column',
    {
      [`col-xs-${xs ? xs : 0}`]: xs ? true : false,
      [`col-sm-${sm ? sm : 0}`]: sm ? true : false,
      [`col-md-${md ? md : 0}`]: md ? true : false,
      [`col-${size ? size : 0}`]: size ? true : false
    },
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Column.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  stringOrNumberPropTypeForKeys(['xs', 'sm', 'md', 'size'])
);

export default Column;

export const ColumnClassNames = [
  'Column12',
  'Column11',
  'Column10',
  'Column9',
  'Column8',
  'Column7',
  'Column6',
  'Column5',
  'Column4',
  'Column3',
  'Column2',
  'Column1',
  'Column'
];

export const {
  Column12,
  Column11,
  Column10,
  Column9,
  Column8,
  Column7,
  Column6,
  Column5,
  Column4,
  Column3,
  Column2,
  Column1
} = (function() {
  const toExport = {};
  for (let i = 12; i > 0; i--) {
    /* eslint-disable react/prop-types */
    const func = ({ children, ...props }) => <Column size={i} {...props}>{children}</Column>;
    /* eslint-enable react/prop-types */
    func.funcName = `Column${i}`;
    toExport[`Column${i}`] = func;
  }
  return toExport;
})();