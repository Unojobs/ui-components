import React from 'react';
import { IBoxProps, Modal as NBModal } from 'native-base';
export const ModalBody = React.memo(({ ...props }: IBoxProps) => {
  return <NBModal.Body {...props} />;
});
