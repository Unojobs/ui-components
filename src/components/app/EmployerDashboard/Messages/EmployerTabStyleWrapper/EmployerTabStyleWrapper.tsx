import React from 'react';
import './TabStyleWrapper.css';

export const EmployerTabStyleWrapper = (props: {
  children: React.ReactNode;
}) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="tabs-antd-custom-styles-employer-portal">
      {children}
    </div>
  );
};
