import React from 'react';
import { Drawer as NBDrawer, IDrawerProps } from 'native-base';

export const Drawer = ({ ...props }: IDrawerProps) => {
  return <NBDrawer {...props}></NBDrawer>;
};
