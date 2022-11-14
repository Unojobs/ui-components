import React from 'react';
import { Avatar } from '../../../composites';
import { makeRandomColor } from '../../../../components/utils';
// CustomAvatar
export interface CustomAvatarProps {
  candidate: { [key: string]: any };
  size: number | string;
}
export const CustomAvatar = (props: CustomAvatarProps) => {
  const { candidate, size } = props;

  return candidate?.avatarUri ? (
    <Avatar size={size} source={{ uri: candidate.avatarUri }} />
  ) : (
    <Avatar
      _text={{ textTransform: 'uppercase' }}
      size={size}
      style={{ backgroundColor: makeRandomColor() }}
    >
      {candidate?.username.slice(0, 1)}
    </Avatar>
  );
};
