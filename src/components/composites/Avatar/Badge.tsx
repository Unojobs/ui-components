import React from 'react';
import { Badge as NBBadge, IAvatarProps } from 'native-base';
export const Badge = ({ ...props }: IAvatarProps) => {
  return <NBBadge {...props}></NBBadge>;
};
