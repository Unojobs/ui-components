import React, { useEffect } from 'react';
import { Box, CloseIcon, HStack, Stack, Text, VStack } from '../../primitives';
import { Alert, IconButton, useToast } from '../../composites';
import type { INotificationAlertProps } from './types';

export const NotificationAlert = (props: INotificationAlertProps) => {
  const toast = useToast();

  useEffect(() => {
    if (props.notification) {
      toast.show({
        placement: props.placement,
        duration: props.duration,
        render: ({ id }) => <ToastAlert id={id} />,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.notification]);

  const ToastAlert = ({ id }: any) => (
    <Stack space={3} w="100%" maxW={props.maxWidth} shadow={9}>
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
              onPress={() => toast.close(id)}
            />
          </HStack>
          <Box pl="6">
            <Text color={props.color}>{props.description}</Text>
          </Box>
        </VStack>
      </Alert>
    </Stack>
  );

  return <></>;
};

NotificationAlert.defaultProps = {
  status: 'info',
  title: '',
  description: '',
  variant: 'left-accent',
  color: 'coolGray.600',
  notification: false,
  duration: 2000,
  placement: 'top-right',
  maxWidth: 400,
};
