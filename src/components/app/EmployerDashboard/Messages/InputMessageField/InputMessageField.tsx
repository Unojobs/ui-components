/* eslint-disable react-native/no-inline-styles */
import { SendOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import React from 'react';
import { HStack, Input } from '../../../../primitives';
import { CustomNBButton } from '../../../CustomNBButton';
import { CustomAvatar } from '../CustomAvatar';
import { CustomFileButton } from '../CustomFileButton';
import { EmojiKeyboard } from '../EmojiKeyboard';
import { STATIC_PROPS } from './constant';
import type { InputMessageFieldProps } from './types';

export const InputMessageField = (props: InputMessageFieldProps) => {
  const { user, handleFileUpload, handleSubmit, handleTextInput, value } =
    props;
  return (
    <HStack {...STATIC_PROPS.CONTAINER}>
      <CustomAvatar user={user} size="45px" />
      <HStack flex={1} height="45px">
        <Form style={{ ...STATIC_PROPS.FORM_STYLE }} onFinish={handleSubmit}>
          <Input
            value={value}
            {...STATIC_PROPS.INPUT}
            onChangeText={(text) => handleTextInput(text)}
          />
          <HStack {...STATIC_PROPS.INPUT_OPTIONS}>
            <EmojiKeyboard value={value} setValue={handleTextInput} />
            <CustomFileButton handleFileUpload={handleFileUpload} />
          </HStack>
        </Form>
      </HStack>
      <CustomNBButton {...STATIC_PROPS.SUBMIT_BUTTON} onClick={handleSubmit}>
        <SendOutlined size={12} style={{ color: 'white' }} />
      </CustomNBButton>
    </HStack>
  );
};
