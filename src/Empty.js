import React from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';
import Title from './EmptyTitle';
import Meta from './EmptyMeta';

const Empty = ({ children, className, icon, title, meta, ...props }) => {
  let classes = classnames('empty', className);
  let iconNode = null;
  if (icon) {
    iconNode = <i className={`icon icon-${icon}`} style={{ 'fontSize': '4rem' }}></i>;
  }
  let titleNode = null;
  if (title) {
    titleNode = <Title>{title}</Title>;
  }
  let metaNode = null;
  if (meta) {
    metaNode = <Meta>{meta}</Meta>;
  }
  return (
    <div className={classes} {...props}>
      {iconNode}
      {titleNode}
      {metaNode}
      {children}
    </div>
  );
};

Empty.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    icon: React.PropTypes.string,
    title: React.PropTypes.node,
    meta: React.PropTypes.node
  }
);

export default Empty;