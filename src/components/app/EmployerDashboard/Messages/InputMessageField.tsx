/* eslint-disable react-native/no-inline-styles */
import { Avatar, Input } from 'antd';
import React from 'react';
import { HStack } from '../../../primitives';
import {
  FileAddOutlined,
  SmileOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { makeRandomColor } from '../../../utils';
import { CustomButton } from '../../CustomButton';
const { TextArea } = Input;
export interface InputMessageFieldProps {
  avatarUri: string;
  username: string;
}
export const InputMessageField = (props: InputMessageFieldProps) => {
  const { avatarUri, username } = props;
  const handleChange = (_event: any) => {};
  const handleEmojiPicker = () => {};
  const handleFileUpload = () => {};
  const handleMessageSubmit = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};
  return (
    <HStack
      width={817}
      height={83}
      alignItems={'center'}
      justifyContent={'space-evenly'}
    >
      {avatarUri ? (
        <Avatar size={45} src={avatarUri} />
      ) : (
        <Avatar size={45} style={{ backgroundColor: makeRandomColor() }}>
          {username.slice(0, 1).toUpperCase()}
        </Avatar>
      )}
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
          onChange={handleChange}
        />
        <HStack space={2}>
          <SmileOutlined onClick={handleEmojiPicker} size={12} />
          <FileAddOutlined onClick={handleFileUpload} size={12} />
        </HStack>
      </HStack>
      <CustomButton
        width="48px"
        height="46px"
        backgroundColor="#4169E0"
        onClick={handleMessageSubmit}
      >
        <SendOutlined size={12} />
      </CustomButton>
    </HStack>
  );
};
