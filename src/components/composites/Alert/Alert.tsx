import React from 'react';
import { Alert as NBAlert, IAlertProps } from 'native-base';
export const Alert = React.memo(({ ...props }: IAlertProps) => {
  return <NBAlert {...props} />;
});
