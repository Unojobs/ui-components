import React from 'react';
import { Pressable, HStack, VStack, Text } from '../../../primitives';
import { Badge } from '../../../composites';
import { CustomAvatar } from './CustomAvatar';
// MessagesSidebar > ScrollableList > CandidateCard
export interface CandidateCardProps {
  onPressHandler: () => void;
  candidate: {
    id: number;
    username: string;
    avatarUri?: string;
    activeApplications?: { jobId: number; jobTitle: string }[];
    latestMessage?: {
      messageBody: string;
      date: string;
      timestamp: string;
    };
  };
  isActive: boolean;
}
export const CandidateCard = (props: CandidateCardProps) => {
  const { onPressHandler, candidate, isActive } = props;

  return (
    <Pressable
      onPress={onPressHandler}
      padding={'4'}
      borderRadius={'lg'}
      backgroundColor={isActive ? 'primary.500' : 'white'}
    >
      <HStack width={'full'} height={'full'} space={'2'}>
        <CustomAvatar user={candidate} size={'12'} />
        <VStack flexGrow={1} space={'1'}>
          <Text fontSize={'md'} color={isActive ? 'white' : 'black'}>
            {candidate?.username}
          </Text>
          <Text
            fontSize={'xs'}
            fontWeight={'normal'}
            color={isActive ? 'white' : 'black'}
          >
            {candidate?.latestMessage?.messageBody}
          </Text>
          <Badge
            borderRadius={'xs'}
            backgroundColor={isActive ? 'primary.900' : 'dark.700'}
          >
            {candidate?.activeApplications?.length &&
            candidate.activeApplications.length > 1 ? (
              <Text
                color={isActive ? 'white' : 'black'}
                fontSize={'xs'}
                fontWeight={'normal'}
              >
                {candidate.activeApplications.length} applications
              </Text>
            ) : (
              <Text
                color={isActive ? 'white' : 'black'}
                fontSize={'xs'}
                fontWeight={'normal'}
              >
                Job:{' '}
                {!!candidate?.activeApplications &&
                  candidate?.activeApplications[0]?.jobTitle}
              </Text>
            )}
          </Badge>
          <HStack justifyContent={'space-between'}>
            <Text
              fontSize={'xs'}
              fontWeight={'medium'}
              color={isActive ? 'white' : 'black'}
            >
              {candidate?.latestMessage?.date}
            </Text>
            <Text
              fontSize={'xs'}
              fontWeight={'medium'}
              color={isActive ? 'white' : 'black'}
            >
              {candidate?.latestMessage?.timestamp}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );
};
