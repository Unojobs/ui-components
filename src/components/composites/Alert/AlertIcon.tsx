import React from 'react';
import { Alert as NBAlert, IIconProps } from 'native-base';
export const AlertIcon = React.memo(({ ...props }: IIconProps) => {
  return <NBAlert.Icon {...props} />;
});
