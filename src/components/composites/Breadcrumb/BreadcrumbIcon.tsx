import React from 'react';
import { Breadcrumb as NBBreadcrumb, IIconProps } from 'native-base';
export const BreadcrumbIcon = ({ ...props }: IIconProps) => {
  return <NBBreadcrumb.Icon {...props}></NBBreadcrumb.Icon>;
};
