import React from 'react';
import { Breadcrumb as NBBreadcrumb, IBoxProps } from 'native-base';
export const BreadcrumbItem = React.memo(({ ...props }: IBoxProps) => {
  return <NBBreadcrumb.Item {...props} />;
});
