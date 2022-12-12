import React from 'react';
import { IStackProps, Row as NBRow } from 'native-base';
export const Row = React.memo(({ ...props }: IStackProps) => {
  return <NBRow {...props} />;
});
