/* eslint-disable react-native/no-inline-styles */
import { Input } from 'antd';
import React from 'react';
import { HStack } from '../../../primitives';
import {
  FileAddOutlined,
  SmileOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { CustomNBButton } from '../../CustomNBButton';
import { CustomAvatar } from './CustomAvatar';
const { TextArea } = Input;
export interface InputMessageFieldProps {
  avatarUri: string;
  username: string;
  id: number;
  handleTextInput: (event?: any) => void;
  handleEmojiInput: (event?: any) => void;
  handleFileUpload: (event?: any) => void;
  handleSubmit: (event?: any) => void;
}
export const InputMessageField = (props: InputMessageFieldProps) => {
  const {
    avatarUri,
    username,
    handleTextInput,
    handleEmojiInput,
    handleFileUpload,
    handleSubmit,
  } = props;
  return (
    <HStack
      width={817}
      height={83}
      alignItems={'center'}
      justifyContent={'space-evenly'}
    >
      <CustomAvatar size={'45px'} candidate={{ avatarUri, username }} />
      <HStack
        width={650}
        height={45}
        paddingX={4}
        paddingY={5}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <TextArea
          placeholder="Send a message..."
          style={{ fontSize: 14 }}
          bordered={false}
          autoSize
          onChange={handleTextInput}
        />
        <HStack space={2}>
          <SmileOutlined onClick={handleEmojiInput} size={12} />
          <FileAddOutlined onClick={handleFileUpload} size={12} />
        </HStack>
      </HStack>
      <CustomNBButton
        htmlType="submit"
        width={'48px'}
        height={'46px'}
        backgroundColor="primary.500"
        onClick={handleSubmit}
      >
        <SendOutlined size={12} style={{ color: '#fff' }} />
      </CustomNBButton>
    </HStack>
  );
};
