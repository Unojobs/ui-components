import React from 'react';
import { Breadcrumb as NBBreadcrumb, ILinkProps } from 'native-base';
export const BreadcrumbLink = React.memo(({ ...props }: ILinkProps) => {
  return <NBBreadcrumb.Link {...props} />;
});
