import React from 'react';
import { Badge } from 'src/components/composites';
import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  HStack,
} from 'src/components/primitives';

type Candidate = {
  name: string;
  imageUrl: string;
};
export interface JobDetailCardProps {
  jobTitle: string;
  jobDescription: string;
  jobImageLink: string;
  jobTags: string[];
  candidates: Candidate[];
}
export const JobDetailCard = (props: JobDetailCardProps) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="384px"
        height="305px"
        rounded="10px"
        overflow="hidden"
        borderColor="#F3F3F3"
        borderWidth="1px"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: '1px',
          borderColor: '#F3F3F3',
        }}
        _light={{
          backgroundColor: 'white',
          borderColor: '#F3F3F3',
        }}
      >
        <Stack p="5" space="20px">
          <Image
            source={{
              uri: props.jobImageLink,
            }}
            alt="Alternate Text"
            size="xl"
            width="60px"
            height="60px"
            rounded="10px"
          />

          <Stack space="10px">
            <Heading size="md" fontSize={16}>
              {props.jobTitle}
            </Heading>
            <Text fontWeight="hairline">{props.jobDescription}</Text>
          </Stack>
          <HStack space="10px">
            {props.jobTags.map((tag) => {
              return (
                <Badge color="#F3F3F3" rounded="5px">
                  {tag}
                </Badge>
              );
            })}
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
JobDetailCard.defaultProps = {
  jobTitle: 'Software Developer',
  jobDescription:
    'You must possess strong analytical skills and the ability to think outside the box.',
  jobImageLink: '',
  jobTags: ['WFO', 'FullTime', 'Rs 30k'],
  candidates: [
    {
      name: 'Sara',
      imageUrl: '',
    },
    {
      name: 'Andrew',
      imageUrl: '',
    },
    {
      name: 'David',
      imageUrl: '',
    },
    {
      name: 'Alexis',
      imageUrl: '',
    },
    {
      name: 'John',
      imageUrl: '',
    },
  ],
};
