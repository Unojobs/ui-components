import React from "react";
import { Modal as NBModal } from "native-base";
export const ModalCloseButton = ({ ...props }: any) => {
  return <NBModal.CloseButton {...props}></NBModal.CloseButton>;
};
