import React from 'react';
import { Breadcrumb as NBBreadcrumb, IIconProps } from 'native-base';
export const BreadcrumbIcon = React.memo(({ ...props }: IIconProps) => {
  return <NBBreadcrumb.Icon {...props} />;
});
