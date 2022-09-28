import React from 'react';
import { Pressable as NBPressable } from 'native-base';
export const Pressable = ({ ...props }: any) => {
  return <NBPressable {...props}></NBPressable>;
};
