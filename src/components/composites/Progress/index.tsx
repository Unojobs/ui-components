import React from 'react';
import { Progress as NBProgress } from 'native-base';

export const Progress = React.memo(({ ...props }: any) => {
  return <NBProgress {...props} />;
});
