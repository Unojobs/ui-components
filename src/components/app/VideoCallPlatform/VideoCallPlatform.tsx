import React from 'react';
import { Box, HStack, Text, GoogleMeetLogo, ZoomLogo } from '../../../';
import type { IVideoCallProps } from './type';
export const VideoCallPlatform = (props: IVideoCallProps) => {
  const { meetingId } = props;
  return (
    <Box>
      <HStack space={5}>
        {meetingId?.includes('meet.google.com') ? (
          <GoogleMeetLogo />
        ) : (
          <ZoomLogo />
        )}
        <Box>
          <Text color="textColor.primary" fontSize="xs" fontWeight={600}>
            {meetingId?.includes('meet.google.com')
              ? 'Google Meet'
              : 'Zoom meet'}
          </Text>
          <HStack>
            <Text
              color="textColor.subtitle"
              fontSize="xs"
              fontWeight={500}
              paddingRight={1}
            >
              Meeting ID :
            </Text>
            <Text color="primary.500" fontSize="xs" fontWeight={500}>
              {meetingId}
            </Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};
VideoCallPlatform.defaultProps = {
  meetingId: 'meet.google.com',
};
