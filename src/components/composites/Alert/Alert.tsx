import React from 'react';
import { Alert as NBAlert, IAlertProps } from 'native-base';
export const Alert = ({ ...props }: IAlertProps) => {
  return <NBAlert {...props}></NBAlert>;
};
