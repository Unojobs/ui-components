import React from 'react';
import './SuperAdminTableWrapper.css';
export const SuperAdminTableWrapper = (props: {
  children: React.ReactNode;
}) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="registration-table-wrapper">
      {children}
    </div>
  );
};
