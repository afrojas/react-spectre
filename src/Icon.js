import React from 'react';
import classnames from 'classnames';
import { classNamePropType, composePropTypes } from './utils';

const Icon = ({ className, name, ...props }) => {
  let classes = classnames('icon', `icon-${name}`, className);
  return (
    <span className={classes} {...props} />
  );
};

Icon.propTypes = composePropTypes(
  {
    name: React.PropTypes.string.isRequired
  },
  classNamePropType
);

export default Icon;