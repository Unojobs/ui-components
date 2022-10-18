/* eslint-disable react-native/no-inline-styles */
import { Avatar } from 'antd';
import React from 'react';
import { HStack, VStack } from 'src/components/primitives';
import { Typography } from 'antd';
import {
  EnvironmentFilled,
  ContainerOutlined,
  MailTwoTone,
  PhoneTwoTone,
} from '@ant-design/icons';
import { CustomButton } from '../../CustomButton';
const { Title, Text } = Typography;
export interface ChatTopInfoBoxProps {
  candidateInfo: { [key: string]: any };
}
export const ChatTopInfoBox = (props: ChatTopInfoBoxProps) => {
  const { candidateInfo } = props;
  return (
    <div
      style={{
        width: 817,
        height: 102,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 4,
      }}
    >
      <HStack space={2}>
        <Avatar size={48} src={candidateInfo?.avatarUri} />
        <VStack>
          <Title style={{ padding: 0, margin: 0 }} level={5}>
            John Smith
          </Title>
          <Text>
            <EnvironmentFilled /> Location
          </Text>
        </VStack>
      </HStack>
      <VStack>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Applied for
        </Text>
        <Text style={{ fontSize: 16 }}>Job: Senior UI/UX Designer</Text>
        <Text type="success" style={{ fontSize: 12 }}>
          Screening
        </Text>
      </VStack>
      <CustomButton
        height="22px"
        width="71px"
        backgroundColor="#FFFFFF"
        color="#000"
      >
        <ContainerOutlined /> Notes
      </CustomButton>
      <VStack space={2}>
        <HStack alignItems={'center'}>
          <MailTwoTone
            twoToneColor="#EB5757
            "
            style={{ marginRight: 4 }}
          />
          <Text type="secondary" copyable>
            john@example.com
          </Text>
        </HStack>

        <HStack alignItems={'center'}>
          <PhoneTwoTone
            twoToneColor="#66B949
            "
            style={{ marginRight: 4 }}
          />
          <Text type="secondary" copyable>
            +919999999999
          </Text>
        </HStack>
      </VStack>
    </div>
  );
};
