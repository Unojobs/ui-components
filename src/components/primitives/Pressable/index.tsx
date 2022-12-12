import React from 'react';
import { IPressableProps, Pressable as NBPressable } from 'native-base';
export const Pressable = React.memo(({ ...props }: IPressableProps) => {
  return <NBPressable {...props} />;
});
