import React from 'react';
import { Avatar } from 'antd';
import { makeRandomColor } from '../../../../components/utils';
// CustomAvatar
export interface CustomAvatarProps {
  candidate: { [key: string]: any };
  size: number;
}
export const CustomAvatar = (props: CustomAvatarProps) => {
  const { candidate, size } = props;

  return candidate?.avatarUri ? (
    <Avatar size={size} src={candidate.avatarUri} />
  ) : (
    <Avatar size={size} style={{ backgroundColor: makeRandomColor() }}>
      {candidate?.username.slice(0, 1).toUpperCase()}
    </Avatar>
  );
};
