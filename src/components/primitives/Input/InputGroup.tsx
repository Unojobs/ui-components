import React from 'react';
import { InputGroup as NBInputGroup } from 'native-base';
export const InputGroup = React.memo(({ ...props }: any) => {
  return <NBInputGroup {...props} />;
});
