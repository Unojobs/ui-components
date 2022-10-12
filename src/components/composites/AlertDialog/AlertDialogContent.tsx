import React from 'react';
import { AlertDialog as NBAlertDialog, IBoxProps } from 'native-base';
export const AlertDialogContent = ({ ...props }: IBoxProps) => {
  return <NBAlertDialog.Content {...props}></NBAlertDialog.Content>;
};
