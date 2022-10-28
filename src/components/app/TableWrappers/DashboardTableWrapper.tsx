import React from 'react';
import './DashboardTableWrapper.css';
export const DashboardTableWrapper = (props: any) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="dashboard-table-wrapper">
      {children}
    </div>
  );
};
