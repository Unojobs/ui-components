import React from 'react';
import { IMenuOptionGroupProps, Menu as NBMenu } from 'native-base';
export const MenuOptionGroup = React.memo(
  ({ ...props }: IMenuOptionGroupProps) => {
    return <NBMenu.OptionGroup {...props} />;
  }
);
