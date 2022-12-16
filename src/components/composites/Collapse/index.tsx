import React from 'react';
import { Collapse as NBCollapse } from 'native-base';

export const Collapse = React.memo(({ ...props }: any) => {
  return <NBCollapse {...props} />;
});
