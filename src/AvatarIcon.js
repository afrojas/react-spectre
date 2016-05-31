import React from 'react';
import classnames from 'classnames';
import { classNamePropType, composePropTypes } from './utils';

const Avatar = ({ className, ...props }) => {
  let classes = classnames('avatar-icon', className);
  return (
    <img className={classes} {...props} />
  );
};

Avatar.propTypes = composePropTypes(
  {
    src: React.PropTypes.string.isRequired
  },
  classNamePropType
);

export default Avatar;