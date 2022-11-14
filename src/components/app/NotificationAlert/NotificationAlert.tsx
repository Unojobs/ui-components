import React, { useEffect } from 'react';
import { Box, CloseIcon, HStack, Stack, Text, VStack } from '../../primitives';
import { Alert, Collapse, IconButton } from '../../composites';
import type { INotificationAlertProps } from './types';

export const NotificationAlert = (props: INotificationAlertProps) => {
  useEffect(() => {
    if (props.show && props.setTimer) {
      setTimeout(() => {
        props.setShow?.(false);
      }, props.removeTimerInSeconds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show]);
  return (
    <Collapse isOpen={props.show}>
      <Stack space={3} w="100%" maxW="400" marginLeft={'auto'}>
        <Alert w="100%" status={props.status} variant={props.variant}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color={props.color}>
                  {props.title}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: props.color,
                }}
                onPress={() => props.setShow?.(false)}
              />
            </HStack>
            <Box pl="6">
              <Text color={props.color}>{props.message}</Text>
            </Box>
          </VStack>
        </Alert>
      </Stack>
    </Collapse>
  );
};

NotificationAlert.defaultProps = {
  status: 'info',
  title: '',
  message: '',
  variant: 'left-accent',
  show: false,
  setShow: undefined,
  color: 'coolGray.600',
  removeTimerInSeconds: 1000,
  setTimer: true,
};
