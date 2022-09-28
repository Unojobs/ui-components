import React from "react";
import { Skeleton as NBSkeleton } from "native-base";
export const Skeleton = ({ ...props }: any) => {
  return <NBSkeleton {...props}></NBSkeleton>;
};
