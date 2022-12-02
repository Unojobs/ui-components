import React from 'react';
import { IconButton as NBIconButton, IIconButtonProps } from 'native-base';

export const IconButton = React.memo(({ ...props }: IIconButtonProps) => {
  return <NBIconButton {...props} />;
});
