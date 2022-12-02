import React from 'react';
import { IBoxProps, Modal as NBModal } from 'native-base';
export const ModalHeader = React.memo(({ ...props }: IBoxProps) => {
  return <NBModal.Header {...props} />;
});
