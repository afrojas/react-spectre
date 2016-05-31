import React from 'react';
import classnames from 'classnames';
import { classNamePropType, composePropTypes } from './utils';

const ChipName = ({ className, ...props }) => {
  let classes = classnames('chip-name', className);
  return (
    <span className={classes} {...props} />
  );
};

ChipName.propTypes = composePropTypes(
  {
    children: React.PropTypes.string.isRequired
  },
  classNamePropType
);

export default ChipName;