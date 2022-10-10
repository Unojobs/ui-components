import React from 'react';
import { ITooltipProps, Tooltip as NBTooltip } from 'native-base';
export const Tooltip = ({ ...props }: ITooltipProps) => {
  return <NBTooltip {...props}></NBTooltip>;
};
