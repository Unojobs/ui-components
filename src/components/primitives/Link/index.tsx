import React from "react";
import { Link as NBLink } from "native-base";

export const Link = ({ ...props }: any) => {
  return <NBLink isUnderlined={false} {...props}></NBLink>;
};
