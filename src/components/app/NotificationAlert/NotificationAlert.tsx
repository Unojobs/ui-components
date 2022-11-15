import React, { useEffect } from 'react';
import { Box, CloseIcon, HStack, Stack, Text, VStack } from '../../primitives';
import { Alert, IconButton, useToast } from '../../composites';
import type { INotificationAlertProps } from './types';

export const NotificationAlert = (props: INotificationAlertProps) => {
  const toast = useToast();

  useEffect(() => {
    if (props.alert) {
      toast.show({
        placement: props.placement,
        duration: props.duration,
        render: ({ id }) => <ToastAlert id={id} />,
      });
      if (props.duration) {
        setTimeout(() => {
          props.setAlert(false);
        }, props.duration);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.alert]);

  const ToastAlert = ({ id }: any) => (
    <Stack
      space={3}
      w="100%"
      maxW={props.maxWidth}
      shadow={9}
      marginLeft={
        props.placement === 'top-left' || props.placement === 'bottom-left'
          ? 30
          : props.placement === 'top' || props.placement === 'bottom'
          ? 0
          : -30
      }
      borderRadius={'10'}
    >
      <Alert
        w="100%"
        status={props.status}
        variant={props.variant}
        backgroundColor={
          props.status === 'success'
            ? 'notificationColors.success'
            : props.status === 'error'
            ? 'notificationColors.error'
            : props.status === 'warning'
            ? 'notificationColors.warning'
            : 'notificationColors.info'
        }
        borderRadius={'10'}
        paddding={'10'}
      >
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack
              space={2}
              flexShrink={1}
              alignItems="center"
              marginTop={props.description ? '' : 2}
            >
              <Alert.Icon color={props.color} />
              <Text fontSize="md" fontWeight="semibold" color={props.color}>
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
              onPress={() => {
                toast.close(id);
                props.setAlert(false);
              }}
            />
          </HStack>
          {props.description && (
            <Box pl="6">
              <Text color={props.color}>{props.description}</Text>
            </Box>
          )}
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
  color: 'textColors.secondary',
  notification: false,
  duration: 2000,
  placement: 'top-right',
  maxWidth: 400,
  alert: true,
  setAlert: undefined,
};
