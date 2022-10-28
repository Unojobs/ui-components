/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Pressable,
} from '../../../primitives';
import { Avatar, Badge } from 'antd';
import { makeRandomColor } from 'src/components/utils';
type TCandidates = { username: string; avatarUri: string };
type TConversations = { cid: number };
export interface ProjectCardProps {
  jobTitle: string;
  candidates?: TCandidates[];
  conversations?: TConversations[];
  unreadConversations: number;
}
export const ProjectCard = (props: ProjectCardProps) => {
  const { jobTitle, candidates, conversations, unreadConversations } = props;
  const handleClick = (event: any) => {
    // eslint-disable-next-line no-console
    console.log(event);
  };
  return (
    <Box width={'295px'} height={'129px'} padding={'16px'}>
      <Pressable onPress={handleClick}>
        <VStack space={3}>
          <Heading size={'md'} style={{ padding: 0, margin: 0 }}>
            {jobTitle}
          </Heading>
          {candidates?.length ? (
            <HStack alignItems={'center'} space={2}>
              <Avatar.Group
                maxCount={2}
                size={'small'}
                maxStyle={{
                  color: '#fff',
                  backgroundColor: '#4169E0',
                  fontSize: 10,
                }}
              >
                {candidates.length &&
                  candidates.map((candidate, idx) =>
                    candidate.avatarUri ? (
                      <Avatar key={idx} src={candidate.avatarUri} />
                    ) : (
                      <Avatar
                        key={idx}
                        style={{ backgroundColor: makeRandomColor() }}
                      >
                        {candidate.username.slice(0, 1).toUpperCase()}
                      </Avatar>
                    )
                  )}
              </Avatar.Group>
              {conversations?.length ? (
                <Text style={{ fontSize: 16, color: '#707070' }}>
                  {conversations.length}{' '}
                  {conversations.length > 1 ? 'Conversations' : 'Conversation'}
                </Text>
              ) : (
                <Text style={{ fontSize: 16, color: '#707070' }} disabled>
                  No conversations
                </Text>
              )}
            </HStack>
          ) : (
            <Text style={{ fontSize: 16 }} disabled>
              No candidates
            </Text>
          )}
          {!!unreadConversations && !!candidates?.length && (
            <HStack alignItems={'center'} justifyContent={'space-between'}>
              <Text style={{ color: '#707070', fontSize: 12 }}>
                {unreadConversations > 1 ? 'Unseen Messages' : 'Unseen Message'}
              </Text>
              <Badge
                count={unreadConversations}
                size={unreadConversations > 9 ? 'small' : 'default'}
                style={{ fontSize: 14 }}
              />
            </HStack>
          )}
        </VStack>
      </Pressable>
    </Box>
  );
};
