import React from "react";
import { AlertDialog as NBAlertDialog } from "native-base";
export const AlertDialogContent = ({ ...props }: any) => {
  return <NBAlertDialog.Content {...props}></NBAlertDialog.Content>;
};
