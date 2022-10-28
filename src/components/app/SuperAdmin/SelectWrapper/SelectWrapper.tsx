import React from 'react';
import './SelectWrapper.css';

export const SelectWrapper = (props: { children: React.ReactNode }) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="select-antd-mod">
      {children}
    </div>
  );
};
