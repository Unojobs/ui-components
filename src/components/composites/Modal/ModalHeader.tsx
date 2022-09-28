import React from "react";
import { Modal as NBModal } from "native-base";
export const ModalHeader = ({ ...props }: any) => {
  return <NBModal.Header {...props}></NBModal.Header>;
};
