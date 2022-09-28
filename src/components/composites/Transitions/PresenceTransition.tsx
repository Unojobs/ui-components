import React from "react";
import { PresenceTransition as NBPresenceTransition } from "native-base";
export const PresenceTransition = ({ ...props }: any) => {
  return <NBPresenceTransition {...props}></NBPresenceTransition>;
};
