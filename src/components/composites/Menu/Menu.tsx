import React from 'react';
import { IMenuProps, Menu as NBMenu } from 'native-base';
export const Menu = React.memo(({ ...props }: IMenuProps) => {
  return <NBMenu {...props} />;
});
