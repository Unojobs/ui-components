import React from 'react';
import { IIconButtonProps, Modal as NBModal } from 'native-base';
export const ModalCloseButton = React.memo(({ ...props }: IIconButtonProps) => {
  return <NBModal.CloseButton {...props} />;
});
