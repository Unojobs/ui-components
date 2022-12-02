import React from 'react';
import { Actionsheet as NBActionsheet } from 'native-base';
export const Actionsheet = React.memo(({ ...props }: any) => {
  return <NBActionsheet {...props} />;
});
