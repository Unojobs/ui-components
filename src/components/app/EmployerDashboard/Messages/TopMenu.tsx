import './CustomAntdTabs.styles.css';
import React, { ReactNode } from 'react';
import { VStack, HStack, Text, Box } from '../../../primitives';
import { Badge } from './../../../composites';
import { CustomAvatar } from './CustomAvatar';
import { CustomNBButton } from '../../CustomNBButton';
import { Tabs } from 'antd';
import {
  EnvironmentFilled,
  MailTwoTone,
  PhoneTwoTone,
  FileTextFilled,
} from '@ant-design/icons';
import { CustomStarRating } from './CustomStarRatings';
export interface TopMenuProps {
  candidate: {
    id: number;
    username: string;
    avatarUri?: string;
    address: { city: string };
    rating?: number;
    activeApplications: {
      jid: number;
      jobTitle: string;
      status: string;
    }[];
    email: string;
    phoneNumber: string;
  };
  tabComponentToRender: ReactNode | null;
}
export const TopMenu = (props: TopMenuProps) => {
  const { candidate, tabComponentToRender } = props;
  const openNotes = () => {};
  return (
    <VStack flexGrow={1} paddingTop={'4'}>
      <HStack space={'2'}>
        <CustomAvatar candidate={candidate} size={'12'} />
        <HStack alignItems={'center'} flexGrow={1}>
          <VStack space={'2'} flexGrow={0.4}>
            <Text>{candidate.username}</Text>
            <HStack space={'2'} alignItems={'center'}>
              <EnvironmentFilled size={12} />
              <Text>{candidate.address.city}</Text>
            </HStack>
            <CustomStarRating rating={candidate.rating} />
          </VStack>
          <HStack
            flexGrow={1}
            alignItems={'center'}
            justifyContent={'space-around'}
          >
            <VStack space={'1'}>
              <Text>Applied for</Text>
              <Badge backgroundColor={'muted.300'}>
                {candidate.activeApplications.length === 1 ? (
                  <Text>Job: {candidate.activeApplications[0].jobTitle}</Text>
                ) : (
                  <Text>Multiple Applications</Text>
                )}
              </Badge>
              <Text>
                {candidate.activeApplications.length === 1
                  ? candidate.activeApplications[0].status
                  : 'Multiple status'}
              </Text>
            </VStack>
            <CustomNBButton
              backgroundColor="white"
              width={'71px'}
              height={'22px'}
              onClick={openNotes}
            >
              <Text>
                <FileTextFilled /> Notes
              </Text>
            </CustomNBButton>
            <VStack space={'4'}>
              <Text>
                <MailTwoTone twoToneColor={'#EB5757'} />
                {candidate.email}
              </Text>
              <Text>
                <PhoneTwoTone twoToneColor={'#66B949'} />
                {candidate.phoneNumber}
              </Text>
            </VStack>
          </HStack>
        </HStack>
      </HStack>
      <Box flexGrow={1}>
        <Tabs
          items={candidate.activeApplications.map((appl, idx) => ({
            label: appl.jobTitle,
            key: String(idx),
            children: tabComponentToRender,
          }))}
        />
      </Box>
    </VStack>
  );
};
