import React from 'react';
import { PresenceTransition as NBPresenceTransition } from 'native-base';
import type { IPresenceTransitionProps } from 'native-base/lib/typescript/components/composites/Transitions/types';
export const PresenceTransition = React.memo(
  ({ ...props }: IPresenceTransitionProps) => {
    return <NBPresenceTransition {...props} />;
  }
);
