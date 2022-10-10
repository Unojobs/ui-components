import React from 'react';
import { Badge as NBBadge, IBadgeProps } from 'native-base';

export const Badge = ({ ...props }: IBadgeProps) => {
  return <NBBadge {...props}></NBBadge>;
};
