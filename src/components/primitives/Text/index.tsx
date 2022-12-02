import React from 'react';
import { ITextProps, Text as NBText } from 'native-base';
export const Text = React.memo(({ ...props }: ITextProps) => {
  return <NBText {...props} />;
});
