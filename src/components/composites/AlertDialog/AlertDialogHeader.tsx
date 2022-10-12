import React from 'react';
import { AlertDialog as NBAlertDialog, IBoxProps } from 'native-base';
export const AlertDialogHeader = ({ ...props }: IBoxProps) => {
  return <NBAlertDialog.Header {...props}></NBAlertDialog.Header>;
};
