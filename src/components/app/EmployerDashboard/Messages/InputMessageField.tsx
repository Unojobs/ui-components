/* eslint-disable react-native/no-inline-styles */
import { Input } from 'antd';
import React from 'react';
import { HStack, Text } from '../../../primitives';
import {
  FileAddOutlined,
  SmileOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { CustomNBButton } from '../../CustomNBButton';
import { CustomAvatar } from './CustomAvatar';
const { TextArea } = Input;
export interface InputMessageFieldProps {
  user: { avatarUri?: string; username: string; id: number };
  handleFileUpload: (event?: any) => void;
  handleEmojiInput: (event?: any) => void;
  handleTextInput: (event?: any) => void;
  handleSubmit: (event?: any) => void;
}
export const InputMessageField = (props: InputMessageFieldProps) => {
  const {
    user,
    handleEmojiInput,
    handleFileUpload,
    handleSubmit,
    handleTextInput,
  } = props;
  return (
    <HStack paddingRight={'4'} height={'83px'} alignItems={'center'}>
      <CustomAvatar user={user} size={45} />
      <HStack
        paddingX={'8'}
        space={'4'}
        flexGrow={1}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <TextArea autoSize style={{ flexGrow: 1 }} onChange={handleTextInput} />
        <HStack alignItems={'center'} justifyContent={'center'}>
          <CustomNBButton
            backgroundColor={'white'}
            height={'8px'}
            width={'8px'}
            onClick={handleEmojiInput}
          >
            <SmileOutlined />
          </CustomNBButton>
          <CustomNBButton
            backgroundColor={'white'}
            height={'8px'}
            width={'8px'}
            onClick={handleFileUpload}
          >
            <FileAddOutlined />
          </CustomNBButton>
        </HStack>
      </HStack>
      <Text>
        <CustomNBButton
          htmlType="submit"
          width={'48px'}
          height={'46px'}
          onClick={handleSubmit}
        >
          <SendOutlined size={12} style={{ color: 'white' }} />
        </CustomNBButton>
      </Text>
    </HStack>
  );
};
