import React from 'react';
import { IMenuItemOptionProps, Menu as NBMenu } from 'native-base';
export const MenuItemOption = React.memo(
  ({ ...props }: IMenuItemOptionProps) => {
    return <NBMenu.ItemOption {...props} />;
  }
);
