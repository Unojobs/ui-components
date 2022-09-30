import React from 'react';
import { ITextAreaProps, TextArea as NBTextArea } from 'native-base';

export const TextArea = ({ ...props }: ITextAreaProps) => {
  //@ts-ignore
  return <NBTextArea {...props}></NBTextArea>;
};
