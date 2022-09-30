import React from 'react';
import { IIconButtonProps, Modal as NBModal } from 'native-base';
export const ModalCloseButton = ({ ...props }: IIconButtonProps) => {
  return <NBModal.CloseButton {...props}></NBModal.CloseButton>;
};
