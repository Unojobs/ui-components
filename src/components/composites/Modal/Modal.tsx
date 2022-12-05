import React from 'react';
import { IModalProps, Modal as NBModal } from 'native-base';
export const Modal = React.memo(({ ...props }: IModalProps) => {
  return <NBModal {...props} />;
});
