import React from "react";
import { Stagger as NBStagger } from "native-base";
import type { ISupportedTransitions } from "native-base/lib/typescript/components/composites/Transitions/types";
import type { IStaggerStyleProps } from "native-base/lib/typescript/components/composites/Transitions/Stagger";

interface IStaggerProps {
  children: any;
  /**
   * Initial styles before the transition starts
   */
  initial?: ISupportedTransitions;
  /**
   * The styles to which each child should animate to while entering.
   */
  animate?: IStaggerStyleProps;
  /**
   * The styles to which each child should animate to while exiting.
   */
  exit?: IStaggerStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;
}

export const Stagger = ({ ...props }: IStaggerProps) => {
  return <NBStagger {...props}></NBStagger>;
};
