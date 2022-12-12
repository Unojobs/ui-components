import React from 'react';
import { ISkeletonProps, Skeleton as NBSkeleton } from 'native-base';
export const Skeleton = React.memo(({ ...props }: ISkeletonProps) => {
  return <NBSkeleton {...props} />;
});
