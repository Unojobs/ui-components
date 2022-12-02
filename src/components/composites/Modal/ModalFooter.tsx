import React from 'react';
import { IBoxProps, Modal as NBModal } from 'native-base';
export const ModalFooter = React.memo(({ ...props }: IBoxProps) => {
  return <NBModal.Footer {...props} />;
});
