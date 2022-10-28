import React from 'react';
import './DashboardTableWrapper.css';
export const DashboardTableWrapper = (props: { children: React.ReactNode }) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="dashboard-table-wrapper">
      {children}
    </div>
  );
};
