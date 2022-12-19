import React from 'react';
import { Button, Icon } from '../../..';
import type { CustomButtonProps } from './types';

export const CustomNBButton = (props: CustomButtonProps) => {
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
    textMarginLeft,
    borderWidth,
    borderColor,
    borderStyle,
    display,
    flexDirection,
    padding,
  } = props;

  return (
    <Button
      leftIcon={icon ? <Icon name="custom-icon" as={icon} /> : undefined}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      isDisabled={disabled}
      paddingLeft={padding ?? '24px'}
      paddingRight={padding ?? '24px'}
      paddingTop={padding ?? 13}
      paddingBottom={padding ?? 13}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderStyle={borderStyle}
      onPress={onClick}
      fontSize={'16px'}
      _text={{ color: color, marginLeft: textMarginLeft }}
      display={display}
      flexDirection={flexDirection}
    >
      {children}
    </Button>
    // </div>
  );
};

CustomNBButton.defaultProps = {
  width: '160px',
  height: '48px',
  backgroundColor: '#4169E0',
  borderRadius: '5px',
  color: '#ffffff',
  disabled: false,
  onclick: undefined,
  textMarginLeft: undefined,
  icon: undefined,
  borderWidth: undefined,
  borderColor: undefined,
  borderStyle: undefined,
  display: 'flex',
  flexDirection: 'row',
};
