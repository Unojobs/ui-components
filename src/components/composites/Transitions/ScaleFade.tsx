import React from 'react';
import { IScaleFadeProps, ScaleFade as NBScaleFade } from 'native-base';
export const ScaleFade = React.memo(({ ...props }: IScaleFadeProps) => {
  return <NBScaleFade {...props} />;
});
