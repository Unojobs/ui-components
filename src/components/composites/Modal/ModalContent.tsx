import React from 'react';
import { IBoxProps, Modal as NBModal } from 'native-base';
export const ModalContent = React.memo(({ ...props }: IBoxProps) => {
  return <NBModal.Content {...props} />;
});
