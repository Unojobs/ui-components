import React from 'react';
import { IMenuItemProps, Menu as NBMenu } from 'native-base';
export const MenuItem = React.memo(({ ...props }: IMenuItemProps) => {
  return <NBMenu.Item {...props} />;
});
