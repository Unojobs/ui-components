import React from 'react';
import { Pressable } from '../../../../primitives';
import { CandidateChatCard } from './CandidateChatCard';
import { STATIC_PROPS } from './constants';
import { EmployeeChatCard } from './EmployeeChatCard';
import type { CandidateCardProps } from './types';
// MessagesSidebar > ScrollableList > CandidateCard

export const ChatCard = (props: CandidateCardProps) => {
  const { onPressHandler, candidate, isActive, isCandidate } = props;

  return (
    <Pressable
      onPress={onPressHandler}
      backgroundColor={isActive ? 'primary.500' : 'white'}
      {...STATIC_PROPS.CONTAINER_PRESSABLE}
    >
      {!isCandidate ? (
        <EmployeeChatCard candidate={candidate} isActive={isActive} />
      ) : (
        <CandidateChatCard candidate={candidate} isActive={isActive} />
      )}
    </Pressable>
  );
};
