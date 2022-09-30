import React from 'react';
import { ISimpleGridProps, SimpleGrid as NBSimpleGrid } from 'native-base';
export const SimpleGrid = ({ ...props }: ISimpleGridProps) => {
  return <NBSimpleGrid {...props}></NBSimpleGrid>;
};
