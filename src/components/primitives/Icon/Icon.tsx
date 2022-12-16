import React from 'react';
import { Icon as NBIcon, IIconProps } from 'native-base';
export const Icon = React.memo(({ ...props }: IIconProps) => {
  return <NBIcon {...props} />;
});
