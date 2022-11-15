import React from 'react';
import { Avatar } from '../../../composites';
import { makeRandomColor } from '../../../../components/utils';
// CustomAvatar
export interface CustomAvatarProps {
  user: { [key: string]: any };
  size: number | string;
}
export const CustomAvatar = (props: CustomAvatarProps) => {
  const { user, size } = props;

  return user?.avatarUri ? (
    <Avatar size={size} source={{ uri: user?.avatarUri }} />
  ) : (
    <Avatar
      _text={{ textTransform: 'uppercase' }}
      size={size}
      style={{ backgroundColor: makeRandomColor() }}
    >
      {user?.username.slice(0, 1)}
    </Avatar>
  );
};
