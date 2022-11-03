import { VStack } from 'native-base';
import React from 'react';
import { CustomButton } from '..';
import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  UnojobsSavedIcon,
  Divider,
  Pressable,
} from '../../../';
import type { ITopmatches } from './types';
export const TopMatches = (props: ITopmatches) => {
  const {
    companyLogo,
    companyName,
    matchLevel,
    jobDescription,
    location,
    buttonText,
    jobPost,
    jobSave,
    type,
    applyJob,
  } = props;
  return (
    <Box
      px={4}
      py={25}
      width={260}
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      borderRadius={12}
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'secondary.300',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'secondary.300',
      }}
    >
      <Stack>
        <VStack space={25}>
          <HStack justifyContent="space-between">
            <Text color="textColors.primary" fontSize="md" fontWeight={600}>
              {jobPost}
            </Text>

            <Pressable onPress={jobSave}>
              <UnojobsSavedIcon size={6} />
            </Pressable>
          </HStack>
          {type !== 'no-event' ? (
            <HStack space={3}>
              <Text color="textColors.primary" fontWeight={500} fontSize="xs">
                Match Level
              </Text>
              <Box
                width={42}
                backgroundColor="success.400"
                borderRadius={2.5}
                pl={2.5}
              >
                <Text color="secondary.300" fontWeight={600} fontSize="xs">
                  {matchLevel}
                </Text>
              </Box>
            </HStack>
          ) : (
            ''
          )}
          <HStack space={2} flexWrap="wrap">
            {jobDescription?.map((desc) => {
              return (
                <Box
                  background="secondary.400"
                  py={2}
                  px={2}
                  color="secondary.300"
                  width="fit-content"
                  marginTop={2}
                  borderRadius={4}
                >
                  <Text
                    fontWeight="500"
                    color="textColors.subtitle"
                    fontSize="2xs"
                  >
                    {desc}
                  </Text>
                </Box>
              );
            })}
          </HStack>
          <Divider my={2} background="secondary.400" />
        </VStack>

        <VStack space={type !== 'no-event' ? 21 : ''} paddingTop={5}>
          <HStack space={2.5}>
            <Image
              borderRadius={100}
              source={{
                uri: companyLogo,
              }}
              alt="Alternate Text"
              size="xs"
            />
            <Box>
              <Text color="textColors.primary" fontSize="sm" fontWeight={600}>
                {companyName}
              </Text>
              <Text color="textColors.subtitle" fontSize="xs" fontWeight={400}>
                {location}
              </Text>
            </Box>
          </HStack>
          {type !== 'no-event' ? (
            <CustomButton width="100%" fontWeight="600" onClick={applyJob}>
              {buttonText}
            </CustomButton>
          ) : (
            ''
          )}
        </VStack>
      </Stack>
    </Box>
  );
};
TopMatches.defaultProps = {
  type: 'default',
  companyName: 'Gojek',
  matchLevel: '65%',
  jobPost: 'Driver Courier',
  jobDescription: [
    'Fulltime',
    'WFO',
    'Driver',
    'Rs 200-500',
    '5 Day',
    '30 Day Joining',
  ],
  location: 'Delhi . 2,5 Km Away',
  buttonText: 'View / Apply',
  companyLogo:
    'data:image/png;base64,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',
  jobSave: () => alert('Saving job'),
  applyJob: () => alert('applying job'),
};
