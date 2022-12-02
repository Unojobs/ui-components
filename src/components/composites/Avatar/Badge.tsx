import React from 'react';
import { Badge as NBBadge, IBadgeProps } from 'native-base';
export const Badge = React.memo(({ ...props }: IBadgeProps) => {
  return <NBBadge {...props} />;
});
