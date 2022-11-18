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
    fontFamily,
    pt,
    p,
    disable,
    display,
    justifyContent,
    alignItems,
    fontWeight,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  } = props;
  const defaultStyle = {
    padding: p,
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    borderRadius: borderRadius,
    fontSize: '16px',
    fontFamily: fontFamily,
    paddingTop: pt,
    display,
    justifyContent,
    alignItems,
    fontWeight,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  };
  return (
    <Button
      style={defaultStyle}
      htmlType={htmlType}
      onClick={onClick}
      icon={icon}
      disabled={disable}
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
  p: '13px 24px',
  pt: '13px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '',
};
