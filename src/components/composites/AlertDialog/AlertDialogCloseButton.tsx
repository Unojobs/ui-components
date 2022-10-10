import React from 'react';
import { AlertDialog as NBAlertDialog, IIconButtonProps } from 'native-base';
export const AlertDialogCloseButton = ({ ...props }: IIconButtonProps) => {
  return <NBAlertDialog.CloseButton {...props}></NBAlertDialog.CloseButton>;
};
