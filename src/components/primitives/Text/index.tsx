import React from 'react';
import { ITextProps, Text as NBText } from 'native-base';
export const Text = ({ ...props }: ITextProps) => {
  return <NBText {...props}></NBText>;
};
