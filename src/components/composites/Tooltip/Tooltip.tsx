import React from 'react';
import { ITooltipProps, Tooltip as NBTooltip } from 'native-base';
export const Tooltip = React.memo(({ ...props }: ITooltipProps) => {
  return <NBTooltip {...props} />;
});
