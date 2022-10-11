import React from 'react';
import { Button, Icon } from 'native-base';
import type { CustomButtonProps } from './types';

export const CustomButton = (props: CustomButtonProps) => {
  const {
    onClick,
    backgroundColor,
    width,
    height,
    borderRadius,
    icon,
    children,
    color,
    disabled,
    // htmlType,
  } = props;

  return (
    <Button
      leftIcon={icon ? <Icon name="custom-icon" as={icon} /> : undefined}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      isDisabled={disabled}
      onPress={onClick}
    >
      <span style={{ color: color }}>{children}</span>
    </Button>
  );
};

CustomButton.defaultProps = {
  width: '160px',
  height: '48px',
  backgroundColor: '#4169E0',
  borderRadius: '5px',
  color: '#ffffff',
  disabled: false,
};
