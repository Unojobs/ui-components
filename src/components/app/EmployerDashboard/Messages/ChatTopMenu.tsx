/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Avatar, Tabs } from 'antd';
import {
  StarFilled,
  EnvironmentFilled,
  FileTextFilled,
} from '@ant-design/icons';
import { Box, HStack, Text, VStack } from 'src/components/primitives';
import { makeRandomColor } from 'src/components/utils';
import { CustomButton } from '../../CustomButton';
type TApplication = { jid: number; jobTitle: string; status: string };
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
}
export const ChatTopMenu = (props: ChatTopMenuProps) => {
  const { candidate } = props;
  return (
    <Box
      height={157}
      width={815}
      borderColor={'amber.100'}
      borderStyle={'solid'}
      borderWidth={2}
    >
      <VStack alignItems={'flex-start'} width={'100%'} height={'100%'}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <HStack
            borderColor={'amber.100'}
            borderStyle={'solid'}
            borderWidth={1}
          >
            {candidate?.avatarUri ? (
              <Avatar size={48} src={candidate.avatarUri} />
            ) : (
              <Avatar size={48} style={{ backgroundColor: makeRandomColor() }}>
                {candidate.username.slice(0, 1).toUpperCase()}
              </Avatar>
            )}
            <VStack>
              <Text>{candidate.username}</Text>
              <span>
                {new Array(candidate.rating).fill(0).map((_, idx) => (
                  <StarFilled
                    key={idx}
                    size={12}
                    style={{ color: '#F2C94C' }}
                  />
                ))}
              </span>
              <Text>
                <EnvironmentFilled size={12} /> {candidate.address}
              </Text>
            </VStack>
          </HStack>

          {/* {candidate.activeApplications.length === 1 ? (
            <VStack>
              <Text>Job:</Text>
              <span>
                <Text>{candidate.activeApplications[0].jobTitle}</Text>
              </span>
              <span>
                <Text>{candidate.activeApplications[0].status}</Text>
              </span>
            </VStack>
          ) : (
            <Text>No Applications</Text>
          )} */}
          <HStack
            space={5}
            borderColor={'amber.100'}
            borderStyle={'solid'}
            borderWidth={1}
            alignItems={'center'}
          >
            <CustomButton backgroundColor="#fff">
              <Text marginRight={2}>Notes</Text>
              <FileTextFilled style={{ color: '#000' }} />
            </CustomButton>
            <span style={{ marginRight: 10 }}>
              <Text>{candidate.activeApplications[0].status}</Text>
            </span>
            <VStack alignItems={'flex-start'} space={1}>
              <Text>email</Text>
              <Text>phoneNumber</Text>
            </VStack>
          </HStack>
        </div>
        {candidate.activeApplications.length && (
          <Tabs
            items={candidate.activeApplications.map((appl, idx) => ({
              label: appl.jobTitle,
              key: String(idx),
              children: appl.jid,
            }))}
          />
        )}
      </VStack>
    </Box>
  );
};
