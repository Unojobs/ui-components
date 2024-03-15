/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Avatar, Tabs } from 'antd';
import {
  StarFilled,
  EnvironmentFilled,
  FileTextFilled,
  MailTwoTone,
  PhoneTwoTone,
} from '@ant-design/icons';
import { Box, HStack, Text, VStack } from '../../../primitives';
import { Badge } from '../../../composites';
import { makeRandomColor } from '../../../utils';
import { CustomNBButton } from '../../CustomNBButton';
type TApplication = { jobId: number; jobTitle: string; status: string };
type TCandidate = {
  username: string;
  avatarUri?: string;
  activeApplications: TApplication[];
  phoneNumber: string;
  email: string;
  address: string;
  rating: number;
};
export interface ChatTopMenuProps {
  candidate: TCandidate;
  handleAddNotes: (event?: any) => void;
}

export const ChatTopMenu1 = (props: ChatTopMenuProps) => {
  const { candidate, handleAddNotes } = props;

  return (
    <Box
      height={157}
      width={815}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
    >
      <HStack
        width={'full'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          flexGrow={1}
        >
          {candidate.avatarUri ? (
            <Avatar
              style={{ marginRight: 6 }}
              size={48}
              src={candidate.avatarUri}
            />
          ) : (
            <Avatar
              size={48}
              style={{ marginRight: 6, backgroundColor: makeRandomColor() }}
            >
              {candidate.username.slice(0, 1).toUpperCase()}
            </Avatar>
          )}
          <VStack space={0.5}>
            <Text fontSize={16}>{candidate.username}</Text>
            {candidate.rating ? (
              <span>
                {new Array(candidate.rating).fill(0).map((_, idx) => (
                  <StarFilled
                    key={idx}
                    size={12}
                    style={{ color: 'gold' }}
                    rev=""
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                ))}
              </span>
            ) : (
              <Text>No rating</Text>
            )}
            <Text>
              <EnvironmentFilled
                rev=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />{' '}
              {candidate.address}
            </Text>
          </VStack>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          flexGrow={1}
          justifyContent={'space-between'}
        >
          <CustomNBButton
            backgroundColor="white"
            color="black"
            width={'152px'}
            height={'40px'}
            onClick={handleAddNotes}
          >
            <FileTextFilled
              size={4}
              rev=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Text>Notes</Text>
          </CustomNBButton>
          <Badge backgroundColor={'muted.100'} paddingX={2.5} paddingY={4}>
            <Text>{candidate.activeApplications[0].status}</Text>
          </Badge>
          <VStack space={0.5}>
            <Text>
              <MailTwoTone
                twoToneColor="#EB5757"
                rev=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />{' '}
              {candidate.email}
            </Text>
            <Text>
              <PhoneTwoTone
                twoToneColor="#66B949"
                rev=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />{' '}
              {candidate.phoneNumber}
            </Text>
          </VStack>
        </Box>
      </HStack>
      {candidate.activeApplications.length && (
        <Tabs
          items={candidate.activeApplications.map((appl, idx) => ({
            label: appl.jobTitle,
            key: String(idx),
            children: appl.jobId,
          }))}
        />
      )}
    </Box>
  );
};
