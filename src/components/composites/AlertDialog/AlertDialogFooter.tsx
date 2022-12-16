import React from 'react';
import { AlertDialog as NBAlertDialog, IBoxProps } from 'native-base';
export const AlertDialogFooter = React.memo(({ ...props }: IBoxProps) => {
  return <NBAlertDialog.Footer {...props} />;
});
