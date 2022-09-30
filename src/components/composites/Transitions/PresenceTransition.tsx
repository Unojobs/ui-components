import React from "react";
import { PresenceTransition as NBPresenceTransition } from "native-base";
import type { IPresenceTransitionProps } from "native-base/lib/typescript/components/composites/Transitions/types";
export const PresenceTransition = ({ ...props }: IPresenceTransitionProps) => {
  return <NBPresenceTransition {...props}></NBPresenceTransition>;
};
