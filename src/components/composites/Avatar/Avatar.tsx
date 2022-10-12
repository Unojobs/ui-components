import React from 'react';
import { Avatar as NBAvatar, IAvatarProps } from 'native-base';
export const Avatar = ({ ...props }: IAvatarProps) => {
  return <NBAvatar {...props}></NBAvatar>;
};
