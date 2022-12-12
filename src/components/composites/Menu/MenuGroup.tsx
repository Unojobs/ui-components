import React from 'react';
import { IMenuGroupProps, Menu as NBMenu } from 'native-base';
export const MenuGroup = React.memo(({ ...props }: IMenuGroupProps) => {
  return <NBMenu.Group {...props} />;
});
