import React from 'react';
import { IWrapProps, Wrap as NBWrap } from 'native-base';

export const Wrap = React.memo(({ ...props }: IWrapProps) => {
  return <NBWrap {...props} />;
});
