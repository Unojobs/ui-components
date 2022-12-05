import React from 'react';
import { Code as NBCode } from 'native-base';

export const Code = React.memo(({ ...props }: any) => {
  return <NBCode {...props} />;
});
