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
          <Text>
            {meetingId?.includes('meet.google.com')
              ? 'Google Meet'
              : 'Zoom meet'}
          </Text>
          <Text>{meetingId}</Text>
        </Box>
      </HStack>
    </Box>
  );
};
VideoCallPlatform.defaultProps = {
  meetingId: 'meet.google.com',
};
