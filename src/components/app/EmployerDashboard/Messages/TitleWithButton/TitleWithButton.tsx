/* eslint-disable react-native/no-inline-styles */
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Heading, HStack, Text } from '../../../../primitives';
import { CustomNBButton } from '../../../CustomNBButton';
import { STATIC_PROPS } from './constants';
import type { TitleWithButtonProps } from './types';

export const TitleWithButton = (props: TitleWithButtonProps) => {
  const { titleText, buttonText, onClick } = props;
  return (
    <HStack {...STATIC_PROPS.HSTACK_CONTAINER}>
      <Heading {...STATIC_PROPS.HEADING}>{titleText}</Heading>
      <CustomNBButton onClick={onClick} {...STATIC_PROPS.BUTTON}>
        <HStack {...STATIC_PROPS.BUTTON_HSTACK}>
          <PlusOutlined
            style={{ ...STATIC_PROPS.ICON }}
            rev=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <Text {...STATIC_PROPS.BUTTON_TEXT}>{buttonText}</Text>
        </HStack>
      </CustomNBButton>
    </HStack>
  );
};

TitleWithButton.defaultProps = {
  titleText: 'Message',
  buttonText: 'New',
};
