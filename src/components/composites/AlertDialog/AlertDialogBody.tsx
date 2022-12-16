import React from 'react';
import { AlertDialog as NBAlertDialog, IBoxProps } from 'native-base';
export const AlertDialogBody = React.memo(({ ...props }: IBoxProps) => {
  return <NBAlertDialog.Body {...props} />;
});
