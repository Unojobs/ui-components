import React from "react";
import { Modal as NBModal } from "native-base";
export const ModalContent = ({ ...props }: any) => {
  return <NBModal.Content {...props}></NBModal.Content>;
};
