/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Avatar } from 'antd';
import { makeRandomColor } from '../../../../components/utils';
import { AppColors } from '../../utils';
// CustomAvatarGroup
export interface CustomAvatarGroupProps {
  data: {
    avatarUri?: string | undefined;
    uid?: number | undefined;
    username: string;
  }[];
  size: any;
  maxAvatarBgColor?: string;
  maxVisibleAvatarCount: number;
}
export const CustomAvatarGroup = (props: CustomAvatarGroupProps) => {
  const { data, size, maxAvatarBgColor, maxVisibleAvatarCount } = props;
  return (
    <Avatar.Group
      maxCount={maxVisibleAvatarCount}
      size={size}
      maxStyle={{
        color: '#fff',
        backgroundColor: maxAvatarBgColor || AppColors.primaryColor,
        fontSize: 10,
      }}
    >
      {data.length &&
        data.map((candidate, idx) =>
          candidate?.avatarUri ? (
            <Avatar key={idx} src={candidate?.avatarUri} />
          ) : (
            <Avatar key={idx} style={{ backgroundColor: makeRandomColor() }}>
              {candidate?.username.slice(0, 1).toUpperCase()}
            </Avatar>
          )
        )}
    </Avatar.Group>
  );
};
