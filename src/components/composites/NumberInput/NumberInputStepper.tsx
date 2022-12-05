import React from 'react';
import { NumberInputStepper as NBNumberInputStepper } from 'native-base';
export const NumberInputStepper = React.memo(({ ...props }: any) => {
  return <NBNumberInputStepper {...props} />;
});
