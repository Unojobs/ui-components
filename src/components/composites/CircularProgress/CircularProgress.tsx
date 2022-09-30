import React from "react";
import { CircularProgress as NBCircularProgress } from "native-base";
import type { ICircularProgressProps } from "native-base/lib/typescript/components/composites/CircularProgress/types";
export const CircularProgress = ({ ...props }: ICircularProgressProps) => {
  return <NBCircularProgress {...props}></NBCircularProgress>;
};
