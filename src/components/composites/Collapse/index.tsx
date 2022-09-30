import React from "react";
import { Collapse as NBCollapse } from "native-base";
import type { ICollapseProps } from "native-base/lib/typescript/components/composites/Collapse";

export const Collapse = ({ ...props }: ICollapseProps) => {
  return <NBCollapse {...props}></NBCollapse>;
};
