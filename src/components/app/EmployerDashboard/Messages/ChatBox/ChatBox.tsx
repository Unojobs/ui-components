/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Typography } from 'antd';
import { MessageTwoTone } from '@ant-design/icons';
import { ChatTopInfoBox } from '../ChatTopInfoBox';
import { InputMessage } from '../InputMessage';
import { VStack } from 'src/components/primitives';
const { Title, Text } = Typography;
export interface ChatBoxProps {
  convoCategory: string;
  activeChat: boolean;
  candidateInfo: { [key: string]: any };
}
export const ChatBox = (props: ChatBoxProps) => {
  const { convoCategory, activeChat, candidateInfo } = props;
  if (!convoCategory) {
    return (
      <div
        style={{
          height: 961,
          width: 818,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 413,
            height: 310,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <MessageTwoTone
            style={{ fontSize: '101px' }}
            twoToneColor="#D7E0E9"
          />
          <div style={{ textAlign: 'center' }}>
            <Title level={4}>You haven't chosen</Title>
            <Text disabled type="secondary">
              Please select the conversation category first
            </Text>
          </div>
        </div>
      </div>
    );
  }
  if (activeChat && convoCategory) {
    return (
      <div
        style={{
          height: 961,
          width: 818,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ChatTopInfoBox candidateInfo={candidateInfo} />
        <VStack
          width={'100%'}
          height={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <p>Message History</p>
        </VStack>
        <InputMessage avatarUri="https://joeschmoe.io/api/v1/random" />
      </div>
    );
  }
  return null;
};
