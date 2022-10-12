import React from 'react';
import { Breadcrumb as NBBreadcrumb, ITextProps } from 'native-base';
export const BreadcrumbText = ({ ...props }: ITextProps) => {
  return <NBBreadcrumb.Text {...props}></NBBreadcrumb.Text>;
};
