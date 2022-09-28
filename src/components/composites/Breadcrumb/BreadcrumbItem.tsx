import React from "react";
import { Breadcrumb as NBBreadcrumb } from "native-base";
export const BreadcrumbItem = ({ ...props }: any) => {
  return <NBBreadcrumb.Item {...props}></NBBreadcrumb.Item>;
};
