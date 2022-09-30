import React from 'react';
import { AlertDialog as NBAlertDialog, IBoxProps } from 'native-base';
export const AlertDialogFooter = ({ ...props }: IBoxProps) => {
  return <NBAlertDialog.Footer {...props}></NBAlertDialog.Footer>;
};
