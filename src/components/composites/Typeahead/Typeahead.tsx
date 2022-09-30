import React from "react";
import { Typeahead as NBTypeahead } from "native-base";
import type { ITypeaheadProps } from "native-base/lib/typescript/components/composites/Typeahead/types";
export const Typeahead = ({ ...props }: ITypeaheadProps) => {
  return <NBTypeahead {...props}></NBTypeahead>;
};
