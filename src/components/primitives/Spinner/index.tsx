import React from 'react';
import { ISpinnerProps, Spinner as NBSpinner } from 'native-base';
export const Spinner = React.memo(({ ...props }: ISpinnerProps) => {
  return <NBSpinner {...props} />;
});
