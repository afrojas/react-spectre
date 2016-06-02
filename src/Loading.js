import React from 'react';
import classnames from 'classnames';
import { classNamePropType } from './utils';

const Loading = ({ className, ...props }) => {
  let classes = classnames('loading', className);
  return (
    <div className={classes} {...props} />
  );
};

Loading.propTypes = classNamePropType;

export default Loading;