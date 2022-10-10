import React from 'react';
import { IBoxProps, Modal as NBModal } from 'native-base';
export const ModalHeader = ({ ...props }: IBoxProps) => {
  return <NBModal.Header {...props}></NBModal.Header>;
};
