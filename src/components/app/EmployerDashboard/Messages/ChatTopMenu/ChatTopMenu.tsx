/* eslint-disable react-native/no-inline-styles */
import {
  DeleteOutlined,
  EnvironmentFilled,
  FileTextFilled,
  MailTwoTone,
  PhoneTwoTone,
} from '@ant-design/icons';
import React from 'react';
import { Badge, Divider } from '../../../../composites';
import { HStack, Text, VStack } from '../../../../primitives';
import { CustomNBButton } from '../../../CustomNBButton';
import { CustomAvatar } from '../CustomAvatar';
import { STATIC_PROPS } from './constant';
import type { ChatTopMenuProps, TApplication, TCandidate } from './types';

export const ChatTopMenu = (props: ChatTopMenuProps) => {
  const {
    candidate,
    activeJobApplication,
    isCandidate,
    handleAddNotes,
    children,
    inputField,
  } = props;
  return (
    <VStack {...STATIC_PROPS.CONTAINER}>
      <HStack {...STATIC_PROPS.PROFILE}>
        {isCandidate ? (
          <HStack space={4}>
            <UserDetails candidate={candidate} />
            <Divider {...STATIC_PROPS.DIVIDER} />
            <AboutAppliedJob activeJobApplication={activeJobApplication} />
          </HStack>
        ) : (
          <>
            <UserDetails candidate={candidate} />
            <Divider {...STATIC_PROPS.DIVIDER} />
            <AboutAppliedJob activeJobApplication={activeJobApplication} />
          </>
        )}
        {isCandidate ? (
          <HStack {...STATIC_PROPS.BUTTON_CONTAINER}>
            <CustomNBButton {...STATIC_PROPS.FIT_CONTENT_TRANSPARENT}>
              <MailTwoTone size={20} twoToneColor={'primary.500'} rev="" />
            </CustomNBButton>
            <CustomNBButton {...STATIC_PROPS.FIT_CONTENT_TRANSPARENT}>
              <DeleteOutlined size={20} style={{ color: '#EB5757' }} rev="" />
            </CustomNBButton>
          </HStack>
        ) : (
          <>
            <Divider {...STATIC_PROPS.DIVIDER} />
            <CustomNBButton
              onClick={handleAddNotes}
              {...STATIC_PROPS.FIT_CONTENT_TRANSPARENT}
            >
              <HStack {...STATIC_PROPS.CENTER_SPACE_12}>
                <FileTextFilled rev="" />
                <Text {...STATIC_PROPS.FONT_16_SEMIBOLD}>Notes</Text>
              </HStack>
            </CustomNBButton>
            <Divider {...STATIC_PROPS.DIVIDER} />
            <VStack space={18}>
              <HStack {...STATIC_PROPS.CENTER_SPACE_12}>
                <MailTwoTone size={16} twoToneColor={'#EB5757'} rev="" />
                <Text {...STATIC_PROPS.FONT_14_SEMIBOLD}>
                  {candidate.email}
                </Text>
              </HStack>
              <HStack {...STATIC_PROPS.CENTER_SPACE_12}>
                <PhoneTwoTone size={16} twoToneColor={'#66B949'} rev="" />
                <Text {...STATIC_PROPS.FONT_14_SEMIBOLD}>
                  {candidate.phoneNumber}
                </Text>
              </HStack>
            </VStack>
          </>
        )}
      </HStack>
      <VStack flex={1} width="100%">
        {children}
        {inputField}
      </VStack>
    </VStack>
  );
};

function UserDetails(props: { candidate: TCandidate }) {
  const { candidate } = props;
  return (
    <HStack alignItems="center" space={4}>
      <CustomAvatar user={candidate} size={12} />
      <VStack space={2.5}>
        <Text fontSize="md" fontWeight={600}>
          {candidate.username}
        </Text>
        <HStack space={2} alignItems={'center'}>
          <EnvironmentFilled size={9} rev="" />
          <Text {...STATIC_PROPS.FONT_12_SEMIBOLD}>
            {candidate.address.city}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}

function AboutAppliedJob(props: { activeJobApplication: TApplication }) {
  const { activeJobApplication } = props;
  return (
    <VStack space={1}>
      <Text {...STATIC_PROPS.FONT_12_SEMIBOLD} color="textColors.subtitle">
        Applied for
      </Text>
      <Text mb="3px" {...STATIC_PROPS.FONT_16_SEMIBOLD}>
        Job : {activeJobApplication?.jobTitle}
      </Text>
      <Badge width="fit-content" px={4} py={1}>
        <Text {...STATIC_PROPS.FONT_12_SEMIBOLD} color="primary.500">
          {activeJobApplication?.status}
        </Text>
      </Badge>
    </VStack>
  );
}
