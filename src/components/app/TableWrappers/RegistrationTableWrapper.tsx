import React from 'react';
import './RegistrationTableWrapper.css';
export const RegistrationTableWrapper = (props: any) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="registration-table-wrapper">
      {children}
    </div>
  );
};
