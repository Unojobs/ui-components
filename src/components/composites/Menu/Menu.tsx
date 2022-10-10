import React from 'react';
import { IMenuProps, Menu as NBMenu } from 'native-base';
export const Menu = ({ ...props }: IMenuProps) => {
  return <NBMenu {...props}></NBMenu>;
};
