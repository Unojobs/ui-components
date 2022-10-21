import React from 'react';
import { Avatar, Center } from '../../composites';
import type { CandidatesList } from './types';
export const CandidateAvatars = (props: CandidatesList) => {
  return (
    <Center>
      <Avatar.Group
        _avatar={{
          size: 'sm',
        }}
        max={3}
        _hiddenAvatarPlaceholder={{
          bg: 'white',
          _text: {
            color: 'black',
            letterSpacing: '-2.3',
            fontSize: '10px',
          },
          borderWidth: '2',
          borderColor: '#F3F3F3',
        }}
      >
        {props.candidates.map((candidate) => {
          return (
            <Avatar
              bg="grey"
              borderWidth="0"
              source={{
                uri: candidate.imageUrl,
              }}
              mr="10px"
            >
              {candidate.name.charAt(0)}
            </Avatar>
          );
        })}
      </Avatar.Group>
    </Center>
  );
};

CandidateAvatars.defaultProps = {};
