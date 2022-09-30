import React from 'react';
import { AspectRatio as NBAspectRatio, IAspectRatioProps } from 'native-base';

export const AspectRatio = ({ ...props }: IAspectRatioProps) => {
  return <NBAspectRatio {...props}></NBAspectRatio>;
};
