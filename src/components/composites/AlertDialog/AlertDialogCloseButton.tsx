import React from 'react';
import { AlertDialog as NBAlertDialog, IIconButtonProps } from 'native-base';
export const AlertDialogCloseButton = React.memo(
  ({ ...props }: IIconButtonProps) => {
    return <NBAlertDialog.CloseButton {...props} />;
  }
);
