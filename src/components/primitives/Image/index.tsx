import React from 'react';
import { IImageProps, Image as NBImage } from 'native-base';
export const Image = React.memo(({ ...props }: IImageProps) => {
  return <NBImage {...props} />;
});
