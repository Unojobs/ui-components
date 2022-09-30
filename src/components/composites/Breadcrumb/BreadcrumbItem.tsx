import React from 'react';
import { Breadcrumb as NBBreadcrumb, IBoxProps } from 'native-base';
export const BreadcrumbItem = ({ ...props }: IBoxProps) => {
  return <NBBreadcrumb.Item {...props}></NBBreadcrumb.Item>;
};
