import React from 'react';
import { AlertDialog as NBAlertDialog, IBoxProps } from 'native-base';
export const AlertDialogContent = React.memo(({ ...props }: IBoxProps) => {
  return <NBAlertDialog.Content {...props} />;
});
