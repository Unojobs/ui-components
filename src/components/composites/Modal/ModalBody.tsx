import React from 'react';
import { IBoxProps, Modal as NBModal } from 'native-base';
export const ModalBody = ({ ...props }: IBoxProps) => {
  return <NBModal.Body {...props}></NBModal.Body>;
};
