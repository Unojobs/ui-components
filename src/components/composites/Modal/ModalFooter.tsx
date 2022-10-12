import React from 'react';
import { IBoxProps, Modal as NBModal } from 'native-base';
export const ModalFooter = ({ ...props }: IBoxProps) => {
  return <NBModal.Footer {...props}></NBModal.Footer>;
};
