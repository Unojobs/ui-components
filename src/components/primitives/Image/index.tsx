import React from 'react';
import { IImageProps, Image as NBImage } from 'native-base';
export const Image = ({ ...props }: IImageProps) => {
  return <NBImage {...props}></NBImage>;
};
