import React from 'react';
import { IScrollViewProps, ScrollView as NBScrollView } from 'native-base';
export const ScrollView = ({ ...props }: IScrollViewProps) => {
  return <NBScrollView {...props} />;
};
