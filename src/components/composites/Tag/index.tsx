import React from 'react';
import { ITagProps, Tag as NBTag } from 'native-base';

export const Tag = ({ ...props }: ITagProps) => {
  return <NBTag {...props}></NBTag>;
};
