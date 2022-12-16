import React from 'react';
import { Container as NBContainer, IContainerProps } from 'native-base';

export const Container = React.memo(({ ...props }: IContainerProps) => {
  return <NBContainer {...props} />;
});
