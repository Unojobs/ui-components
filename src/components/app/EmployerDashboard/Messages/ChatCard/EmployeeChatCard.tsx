import React from 'react';
import { Badge } from '../../../../composites';
import { HStack, Text, VStack } from '../../../../primitives';
import { CustomAvatar } from '../CustomAvatar';
import { STATIC_PROPS } from './constants';
import type { ChatCardComponent } from './types';

export function EmployeeChatCard({ candidate, isActive }: ChatCardComponent) {
  return (
    <HStack width="full" height="full" space={3}>
      <CustomAvatar user={candidate} size={12} />
      <VStack flexGrow={1} space={2}>
        <Text
          color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.ALL_BLACK}
          {...STATIC_PROPS.FONT_MEDIUM_SEMIBOLD}
        >
          {candidate?.username}
        </Text>
        <Text
          {...STATIC_PROPS.FONT_SMALL_NORMAL}
          color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.BLACK}
        >
          {candidate?.latestMessage?.messageBody}
        </Text>
        <Badge
          borderRadius={'xs'}
          backgroundColor={isActive ? 'primary.900' : 'dark.700'}
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
        <HStack justifyContent="space-between">
          <Text
            color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.BLACK}
            {...STATIC_PROPS.FONT_SMALL_NORMAL}
          >
            {candidate?.latestMessage?.date}
          </Text>
          <Text
            color={isActive ? STATIC_PROPS.WHITE : STATIC_PROPS.BLACK}
            {...STATIC_PROPS.FONT_SMALL_NORMAL}
          >
            {candidate?.latestMessage?.timestamp}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
