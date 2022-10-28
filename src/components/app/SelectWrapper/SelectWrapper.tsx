import React from 'react';
import './SelectWrapper.css';

export const SelectWrapper = (props: any) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="select-antd-mod">
      {children}
    </div>
  );
};
