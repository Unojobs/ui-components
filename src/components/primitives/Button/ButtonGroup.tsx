import React from 'react';
import { Button } from 'native-base';
export const ButtonGroup = React.memo(({ ...props }: any) => {
  return <Button.Group {...props} />;
});
