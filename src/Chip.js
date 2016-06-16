import React from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';
import Name from './ChipName';
import Button from './Button';

const Chip = ({ children, name, clear, icon, avatar, className, ...props }) => {
  let classes = classnames('chip-sm', className);
  const nameNode = name ? <Name>{name}</Name> : null;
  const clearNode = clear ? <Button clear /> : null;
  const iconNode = icon ? <span className={`icon icon-${icon}`} /> : null;
  const avatarNode = avatar ? <img src={avatar} className='avatar' /> : null;
  return (
    <div className={classes} {...props}>
      {iconNode}
      {avatarNode}
      {nameNode}
      {children}
      {clearNode}
    </div>
  );
};

Chip.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  {
    name: React.PropTypes.string,
    clear: React.PropTypes.bool,
    icon: React.PropTypes.string,
    avatar: React.PropTypes.string
  },
  classNamePropType
);

export default Chip;