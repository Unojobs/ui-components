import React from "react";
import { Code as NBCode } from "native-base";
import type { ICodeProps } from "native-base/lib/typescript/components/composites/Code";

export const Code = ({ ...props }: ICodeProps) => {
  return <NBCode {...props}></NBCode>;
};
