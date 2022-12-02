import React from 'react';
import { AlertDialog as NBAlertDialog } from 'native-base';
export const AlertDialog = React.memo(({ ...props }: any) => {
  return <NBAlertDialog {...props} />;
});
