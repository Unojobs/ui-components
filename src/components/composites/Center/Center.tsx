import React from 'react';
import { Center as NBCenter, ICenterProps } from 'native-base';
export const Center = React.memo(({ ...props }: ICenterProps) => {
  return <NBCenter {...props} />;
});
