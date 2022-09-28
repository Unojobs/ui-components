import React from "react";
import { AlertDialog as NBAlertDialog } from "native-base";
export const AlertDialogCloseButton = ({ ...props }: any) => {
  return <NBAlertDialog.CloseButton {...props}></NBAlertDialog.CloseButton>;
};
