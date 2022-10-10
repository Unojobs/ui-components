import React from 'react';
import { Avatar as NBAvatar, IAvatarProps } from 'native-base';
export const AvatarGroup = ({ ...props }: IAvatarProps) => {
  return <NBAvatar.Group {...props}></NBAvatar.Group>;
};
