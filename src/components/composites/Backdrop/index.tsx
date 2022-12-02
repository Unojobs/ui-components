import React from 'react';
import { Backdrop as NBBackdrop, IPressableProps } from 'native-base';

export const Backdrop = React.memo(({ ...props }: IPressableProps) => {
  return <NBBackdrop {...props} />;
});
