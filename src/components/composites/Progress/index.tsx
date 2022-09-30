import React from "react";
import { Progress as NBProgress } from "native-base";
import type { IProgressProps } from "native-base/lib/typescript/components/composites";

export const Progress = ({ ...props }: IProgressProps) => {
  return <NBProgress {...props}></NBProgress>;
};
