import {
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
import './candidateChatMenu.css';
import { STATIC_PROPS } from './constant';
import type { CandidateChatTopMenuProps } from './types';

export const CandidateChatTopMenu = (props: CandidateChatTopMenuProps) => {
  const { candidate, activeJobApplication, onJobTabSwitch } = props;
  const openNotes = () => {};
  return (
    <VStack {...STATIC_PROPS.CONTAINER}>
      <HStack {...STATIC_PROPS.PROFILE}>
        <HStack alignItems="center" space={4}>
          <CustomAvatar user={candidate} size={'12'} />
          <VStack space={2.5}>
            <Text fontSize="md" fontWeight={600}>
              {candidate.username}
            </Text>
            <HStack space={'2'} alignItems={'center'}>
              <EnvironmentFilled size={9} />
              <Text {...STATIC_PROPS.FONT_12_SEMIBOLD}>
                {candidate.address.city}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <Divider width="1px" height="70px" orientation="vertical" />
        <VStack space={1}>
          <Text {...STATIC_PROPS.FONT_12_SEMIBOLD} color="textColors.subtitle">
            Applied for
          </Text>
          <Text mb={'3px'} {...STATIC_PROPS.FONT_16_SEMIBOLD}>
            Job : {activeJobApplication?.jobTitle}
          </Text>
          <Badge width="fit-content" px={4} py={1}>
            <Text {...STATIC_PROPS.FONT_12_SEMIBOLD} color="primary.500">
              {activeJobApplication?.status}
            </Text>
          </Badge>
        </VStack>
        <Divider width="1px" height="70px" orientation="vertical" />
        <CustomNBButton
          onClick={openNotes}
          {...STATIC_PROPS.FIT_CONTENT_TRANSPARENT}
        >
          <HStack {...STATIC_PROPS.CENTER_SPACE_12}>
            <FileTextFilled />
            <Text {...STATIC_PROPS.FONT_16_SEMIBOLD}>Notes</Text>
          </HStack>
        </CustomNBButton>
        <Divider width="1px" height="70px" orientation="vertical" />
        <VStack space={18}>
          <HStack {...STATIC_PROPS.CENTER_SPACE_12}>
            <MailTwoTone size={16} twoToneColor={'#EB5757'} />
            <Text {...STATIC_PROPS.FONT_14_SEMIBOLD}>{candidate.email}</Text>
          </HStack>
          <HStack {...STATIC_PROPS.CENTER_SPACE_12}>
            <PhoneTwoTone size={16} twoToneColor={'#66B949'} />
            <Text {...STATIC_PROPS.FONT_14_SEMIBOLD}>
              {candidate.phoneNumber}
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <HStack space={10} minWidth={'700px'}>
        {!!candidate.activeApplications.length &&
          candidate.activeApplications.map((application) => (
            <div
              key={application.jobId}
              className={
                application.jobId === activeJobApplication?.jobId
                  ? 'candidate-job-option'
                  : ''
              }
            >
              <CustomNBButton
                onClick={() => onJobTabSwitch(application)}
                {...STATIC_PROPS.FIT_CONTENT_TRANSPARENT}
              >
                <Text {...STATIC_PROPS.FONT_16_SEMIBOLD}>
                  {application.jobTitle}
                </Text>
              </CustomNBButton>
            </div>
          ))}
      </HStack>
    </VStack>
  );
};
