import React from 'react';
import { IOverlayProps, Overlay as NBOverlay } from 'native-base';
export const Overlay = ({ ...props }: IOverlayProps) => {
  return <NBOverlay {...props}></NBOverlay>;
};
