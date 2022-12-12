import React from 'react';
import { Drawer as NBDrawer, IDrawerProps } from 'native-base';

export const Drawer = React.memo(({ ...props }: IDrawerProps) => {
  return <NBDrawer {...props} />;
});
