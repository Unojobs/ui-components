import React from 'react';
import { Badge, Divider } from '../../../../composites';
import { HStack, Text, VStack } from '../../../../primitives';
import { CustomAvatar } from '../CustomAvatar';
import { STATIC_PROPS } from './constants';
import type { ChatCardComponent } from './types';

export function CandidateChatCard({ candidate, isActive }: ChatCardComponent) {
  return (
    <VStack {...STATIC_PROPS.CANDIDATE.CONTAINER}>
      <HStack space={3.5}>
        <CustomAvatar user={candidate} size={12} />
        <VStack space={2.5}>
          <Text
            {...STATIC_PROPS.FONT_MEDIUM_SEMIBOLD}
            color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.BLACK}
          >
            {candidate?.username}
          </Text>
          <Text
            color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.BLACK}
            {...STATIC_PROPS.CANDIDATE.LATEST_MESSAGE}
          >
            {candidate?.latestMessage?.messageBody}
          </Text>
        </VStack>
      </HStack>
      <Divider />
      <HStack alignItems="center" justifyContent="space-between">
        <Badge
          backgroundColor={isActive ? 'primary.900' : 'dark.700'}
          {...STATIC_PROPS.CANDIDATE.BADGE}
        >
          <Text
            color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.MEDIUM_BLACK}
            {...STATIC_PROPS.FONT_SMALL_NORMAL}
          >
            {candidate?.activeApplications?.length &&
            candidate.activeApplications.length > 1 ? (
              `${candidate.activeApplications.length} applications`
            ) : (
              <>
                Job:{' '}
                {!!candidate?.activeApplications &&
                  candidate?.activeApplications[0]?.jobTitle}
              </>
            )}
          </Text>
        </Badge>
        <Text
          color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.BLACK}
          {...STATIC_PROPS.FONT_SMALL_NORMAL}
        >
          {candidate?.latestMessage?.timestamp}
        </Text>
      </HStack>
    </VStack>
  );
}
