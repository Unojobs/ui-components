import React from 'react';
import { Skeleton as NBSkeleton } from 'native-base';
export const SkeletonText = ({ ...props }: any) => {
  return <NBSkeleton.Text {...props}></NBSkeleton.Text>;
};
