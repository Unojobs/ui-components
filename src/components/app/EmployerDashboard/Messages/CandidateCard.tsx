import React from 'react';
import { Avatar } from 'antd';
import { Box, HStack, VStack, Text, Pressable } from '../../../primitives';
import { Badge } from '../../../composites';
import { makeRandomColor } from '../../../utils';
type TApplication = { jid: number; jobTitle: string; status: string };
type TMessage = { msgBody: any; date: string; timestamp: string };
type TCandidate = {
  username: string;
  avatarUri?: string;
  activeApplications: TApplication[];
};
export interface CandidateCardProps {
  candidate: TCandidate;
  latestMessage: TMessage;
  isActive: boolean;
}
export const CandidateCard = (props: CandidateCardProps) => {
  const { candidate, latestMessage, isActive } = props;
  const handleClick = (event: any) => {
    // eslint-disable-next-line no-console
    console.log(event);
  };
  return (
    <Box
      width={326}
      height={126}
      padding={4}
      borderRadius={2.5}
      justifyContent={'space-between'}
      backgroundColor={isActive ? '#4169E0' : '#fff'}
    >
      <Pressable onPress={handleClick}>
        <HStack width={'full'} alignItems={'flex-start'} space={2.5}>
          {candidate?.avatarUri ? (
            <Avatar size={48} src={candidate.avatarUri} />
          ) : (
            <Avatar size={48} style={{ backgroundColor: makeRandomColor() }}>
              {candidate.username.slice(0, 1).toUpperCase()}
            </Avatar>
          )}
          <VStack flexGrow={1} space={1}>
            <Text color={isActive ? '#fff' : '#000304'} fontSize={16}>
              {candidate.username}
            </Text>
            <Text
              color={isActive ? '#fff' : '#000304'}
              fontSize={12}
              fontWeight={'hairline'}
            >
              {latestMessage.msgBody}
            </Text>

            <Badge
              backgroundColor={isActive ? '#6E91EC' : '#E7E7E7'}
              textAlign="center"
              borderRadius={4}
            >
              {candidate.activeApplications.length &&
              candidate.activeApplications.length > 1 ? (
                <Text
                  color={isActive ? '#fff' : '#000304'}
                  fontSize={'xs'}
                  borderRadius={4}
                  fontWeight={'light'}
                >
                  {candidate.activeApplications.length} applications
                </Text>
              ) : (
                <Text
                  color={isActive ? '#fff' : '#000304'}
                  fontSize={'xs'}
                  borderRadius={4}
                  fontWeight={'light'}
                >
                  Job: {candidate.activeApplications[0].jobTitle}
                </Text>
              )}
            </Badge>

            <HStack
              marginTop={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text
                color={isActive ? '#fff' : '#000304'}
                fontSize={'xs'}
                fontWeight={'light'}
              >
                {latestMessage.date}
              </Text>
              <Text
                color={isActive ? '#fff' : '#000304'}
                fontSize={'xs'}
                fontWeight={'light'}
              >
                {latestMessage.timestamp}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
  );
};
