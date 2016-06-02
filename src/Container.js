import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenRequiredPropType, classNamePropType, composePropTypes } from './utils';

const Container = ({ children, size, className, ...props }) => {
  let classes = classnames(
    'container',
    {
      'grid-960': (size && `${size}` === '960'),
      'grid-480': (size && `${size}` === '480')
    },
    className
  );
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

Container.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenRequiredPropType,
  classNamePropType,
  {
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }
);

export default Container;