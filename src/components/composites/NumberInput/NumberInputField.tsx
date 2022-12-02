import React from 'react';
import { NumberInputField as NBNumberInputField } from 'native-base';
export const NumberInputField = React.memo(({ ...props }: any) => {
  return <NBNumberInputField {...props} />;
});
