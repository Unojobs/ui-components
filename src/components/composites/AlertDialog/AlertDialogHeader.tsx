import React from 'react';
import { AlertDialog as NBAlertDialog, IBoxProps } from 'native-base';
export const AlertDialogHeader = React.memo(({ ...props }: IBoxProps) => {
  return <NBAlertDialog.Header {...props} />;
});
