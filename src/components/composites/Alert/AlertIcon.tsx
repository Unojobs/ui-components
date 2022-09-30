import React from 'react';
import { Alert as NBAlert, IIconProps } from 'native-base';
export const AlertIcon = ({ ...props }: IIconProps) => {
  return <NBAlert.Icon {...props}></NBAlert.Icon>;
};
