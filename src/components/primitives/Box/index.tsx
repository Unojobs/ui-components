import React from 'react';
import { Box as NBBox, IBoxProps } from 'native-base';

export const Box = React.memo(({ ...props }: IBoxProps) => {
  return <NBBox {...props} />;
});
