import React from 'react';
import { Kbd as NBKbd } from 'native-base';
import type { IKbdProps } from 'native-base/lib/typescript/components/composites';

export const Kbd = ({ ...props }: IKbdProps) => {
  return <NBKbd {...props}></NBKbd>;
};
