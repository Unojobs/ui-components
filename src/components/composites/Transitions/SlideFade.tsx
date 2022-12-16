import React from 'react';
import { ISlideFadeProps, SlideFade as NBSlideFade } from 'native-base';
export const SlideFade = React.memo(({ ...props }: ISlideFadeProps) => {
  return <NBSlideFade {...props} />;
});
