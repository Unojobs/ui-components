import React from 'react';
import { Breadcrumb as NBBreadcrumb, IBreadcrumbProps } from 'native-base';
export const Breadcrumb = ({ ...props }: IBreadcrumbProps) => {
  return <NBBreadcrumb {...props}></NBBreadcrumb>;
};
