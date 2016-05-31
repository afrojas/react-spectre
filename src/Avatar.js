import React from 'react';
import classnames from 'classnames';
import { oneOrMoreRenderableChildrenPropType, classNamePropType, composePropTypes } from './utils';
import Icon from './AvatarIcon';

const Avatar = ({ children, className, xl, lg, sm, xs, initial, img, icon, ...props }) => {
  let classes = classnames(
    'avatar',
    {
      'avatar-xl': xl,
      'avatar-lg': lg,
      'avatar-sm': sm,
      'avatar-xs': xs
    },
    className
  );
  let imgNode = null;
  if (img) {
    imgNode = <img src={img} />;
  }
  let iconNode = null;
  if (icon) {
    iconNode = <Icon src={icon} />;
  }
  return (
    <figure className={classes} data-initial={initial} {...props}>
      {children}
      {imgNode}
      {iconNode}
    </figure>
  );
};

Avatar.propTypes = composePropTypes(
  oneOrMoreRenderableChildrenPropType,
  classNamePropType,
  {
    xl: React.PropTypes.bool,
    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool,
    xs: React.PropTypes.bool,
    initial: React.PropTypes.string,
    img: React.PropTypes.string,
    icon: React.PropTypes.string
  }
);

export default Avatar;