import React from 'react';
import { Hidden as NBHidden, IHiddenProps } from 'native-base';

export const Hidden = React.memo(({ ...props }: IHiddenProps) => {
  return <NBHidden {...props} />;
});
