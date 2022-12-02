import React from 'react';
import { Kbd as NBKbd } from 'native-base';

export const Kbd = React.memo(({ ...props }: any) => {
  return <NBKbd {...props} />;
});
