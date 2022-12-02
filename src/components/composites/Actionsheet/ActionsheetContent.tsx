import React from 'react';
import { Actionsheet as NBActionsheet } from 'native-base';
export const ActionsheetContent = React.memo(({ ...props }: any) => {
  return <NBActionsheet.Content {...props} />;
});
