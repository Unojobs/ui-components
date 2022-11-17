/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, VStack, Heading, Text, HStack } from '../../../primitives';
import { CustomAvatarGroup } from './CustomAvatarGroup';
import { Badge } from 'antd';

// MessagesSidebar > ScrollableList > ProjectCard
export interface ProjectCardProps {
  jobTitle: string;
  candidates: { avatarUri?: string; uid?: number; username: string }[];
  totalConversations: { cid: number }[];
  unreadMessages: number;
  onPressHandler: () => void;
}
export const ProjectCard = (props: ProjectCardProps) => {
  const {
    jobTitle,
    candidates,
    totalConversations,
    unreadMessages,
    onPressHandler,
  } = props;
  return (
    <Pressable onPress={onPressHandler} marginY={'4'} padding={'4'}>
      <VStack space={'3'}>
        <Heading fontSize={'xl'} fontWeight={'medium'}>
          {jobTitle}
        </Heading>
        {candidates.length ? (
          <HStack space={'2'}>
            <CustomAvatarGroup
              data={candidates}
              size={'small'}
              maxVisibleAvatarCount={2}
            />
            {totalConversations?.length ? (
              <Text fontSize={'md'} color={'textColors.subtitle'}>
                {totalConversations.length}{' '}
                {totalConversations.length > 1
                  ? 'Conversations'
                  : 'Conversation'}
              </Text>
            ) : (
              <Text fontSize={'md'} color={'textColors.subtitle'} disabled>
                No conversations
              </Text>
            )}
          </HStack>
        ) : (
          <Text fontSize={'lg'} disabled>
            No Candidates
          </Text>
        )}
        {!!unreadMessages && !!candidates?.length && (
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text fontSize={'xs'} color={'textColors.subtitle'}>
              {unreadMessages > 1 ? 'Unseen Messages' : 'Unseen Message'}
            </Text>
            <Badge
              count={unreadMessages}
              size={unreadMessages > 9 ? 'small' : 'default'}
              style={{ fontSize: 14, backgroundColor: '#EB5757' }}
            />
          </HStack>
        )}
      </VStack>
    </Pressable>
  );
};
