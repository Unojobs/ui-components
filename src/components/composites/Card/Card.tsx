import React from 'react';
import { Card as NBCard, ICardProps } from 'native-base';
export const Card = React.memo(({ ...props }: ICardProps) => {
  return <NBCard {...props} />;
});
