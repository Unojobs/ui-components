import React from 'react';
import { IOverlayProps, Overlay as NBOverlay } from 'native-base';
export const Overlay = React.memo(({ ...props }: IOverlayProps) => {
  return <NBOverlay {...props} />;
});
