import React from 'react';
import { CircularProgress as NBCircularProgress } from 'native-base';

export const CircularProgress = React.memo(({ ...props }: any) => {
  return <NBCircularProgress {...props} />;
});
