import React from 'react';
import { ISkeletonProps, Skeleton as NBSkeleton } from 'native-base';
export const Skeleton = ({ ...props }: ISkeletonProps) => {
  return <NBSkeleton {...props}></NBSkeleton>;
};
