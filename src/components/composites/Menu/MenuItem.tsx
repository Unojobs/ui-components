import React from 'react';
import { IMenuItemProps, Menu as NBMenu } from 'native-base';
export const MenuItem = ({ ...props }: IMenuItemProps) => {
  return <NBMenu.Item {...props}></NBMenu.Item>;
};
