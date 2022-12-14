import React from 'react';
import { ISwitchProps, Switch as NBSwitch } from 'native-base';

export const Switch = React.memo(({ ...props }: ISwitchProps) => {
  return <NBSwitch {...props} />;
});
