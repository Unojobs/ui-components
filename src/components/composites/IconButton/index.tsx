import React from 'react';
import { IconButton as NBIconButton, IIconButtonProps } from 'native-base';

export const IconButton = ({ ...props }: IIconButtonProps) => {
  return <NBIconButton {...props}></NBIconButton>;
};
