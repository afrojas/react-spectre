import React from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';

const Section = ({ children, className, ...props }) => {
  let classes = classnames('section', className);
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType
);

export default Section;