import React from 'react';
import { Breadcrumb as NBBreadcrumb, ILinkProps } from 'native-base';
export const BreadcrumbLink = ({ ...props }: ILinkProps) => {
  return <NBBreadcrumb.Link {...props}></NBBreadcrumb.Link>;
};
