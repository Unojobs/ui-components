import React from 'react';
import { Avatar as NBAvatar, IAvatarProps } from 'native-base';
export const AvatarGroup = React.memo(({ ...props }: IAvatarProps) => {
  return <NBAvatar.Group {...props} />;
});
