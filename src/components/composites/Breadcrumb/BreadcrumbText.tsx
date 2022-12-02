import React from 'react';
import { Breadcrumb as NBBreadcrumb, ITextProps } from 'native-base';
export const BreadcrumbText = React.memo(({ ...props }: ITextProps) => {
  return <NBBreadcrumb.Text {...props} />;
});
