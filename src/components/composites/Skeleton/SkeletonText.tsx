import React from 'react';
import { Skeleton as NBSkeleton } from 'native-base';
export const SkeletonText = React.memo(({ ...props }: any) => {
  return <NBSkeleton.Text {...props} />;
});
