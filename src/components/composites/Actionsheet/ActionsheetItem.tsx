import React from 'react';
import { Actionsheet as NBActionsheet } from 'native-base';
export const ActionsheetItem = React.memo(({ ...props }: any) => {
  return <NBActionsheet.Item {...props} />;
});
