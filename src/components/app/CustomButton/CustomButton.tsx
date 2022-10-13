import React from 'react';
import { Button } from 'antd';
import type { CustomButtonProps } from './types';

export const CustomButton = (props: CustomButtonProps) => {
  const {
    onClick,
    backgroundColor,
    width,
    height,
    borderRadius,
    border,
    icon,
    children,
    color,
    htmlType,
    fontFamily
  } = props;
  const defaultStyle = {
    padding: '13px 24px',
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    borderRadius: borderRadius,
    fontSize: '16px',
    fontFamily:fontFamily
  };
  return (
    <Button
      style={defaultStyle}
      htmlType={htmlType}
      onClick={onClick}
      icon={icon}
      
    >
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  width: '160px',
  height: '48px',
  backgroundColor: '#4169E0',
  borderRadius: '5px',
  color: '#ffffff',
  htmlType: 'button',
  onClick: undefined,
  border: 'none',
};
