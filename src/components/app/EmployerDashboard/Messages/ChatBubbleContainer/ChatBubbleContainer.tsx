import { FileAddOutlined } from '@ant-design/icons';
import React from 'react';
import { AppColors } from 'src/components/utils/colors';
import { Divider } from '../../../../composites';
import {
  Box,
  HStack,
  Link,
  ScrollView,
  Text,
  VStack,
} from '../../../../primitives';
import { urlify } from '../../../../utils';
import { CustomAvatar } from '../CustomAvatar';
import { LinkDownloader } from '../LinkDownloader';
import { STATIC_PROPS } from './constant';
import type { TChatBubbleContainerProps, TChatBubbleProps } from './types';

export const ChatBubbleContainer = (props: TChatBubbleContainerProps) => {
  const { candidate, chat } = props;
  return (
    <VStack {...STATIC_PROPS.CONTAINER}>
      <ScrollView w="100%" h="100%" flex={1} flexDirection="column-reverse">
        {chat.map((obj, idx) => (
          <ChatBubble key={idx} candidate={candidate} messageObj={obj} />
        ))}
      </ScrollView>
    </VStack>
  );
};

ChatBubbleContainer.defaultProps = {
  chat: [],
};

function ChatBubble(props: TChatBubbleProps) {
  const {
    candidate,
    messageObj: { message, created_at, messageByMe, is_file, fileObj },
  } = props;
  const hasMessageUrl = urlify(message) as RegExpExecArray | null;

  return (
    <HStack
      marginY={3}
      space={3}
      alignSelf={messageByMe ? 'flex-end' : 'flex-start'}
      alignItems="center"
      flexDirection={messageByMe ? 'row-reverse' : 'row'}
    >
      <Box alignSelf="flex-start" mt={0.5}>
        <CustomAvatar user={candidate} size={6} />
      </Box>
      <Box
        {...STATIC_PROPS.MESSAGE}
        backgroundColor={messageByMe ? 'secondary.800' : 'secondary.300'}
      >
        {!is_file ? (
          <>
            {/* {hasMessageUrl?.length && <LinkPreview message={message} />} */}
            <Text {...STATIC_PROPS.MESSAGE_TEXT}>
              <UrlConvertor hasMessageUrl={hasMessageUrl} message={message} />
            </Text>
          </>
        ) : (
          <LinkDownloader
            href={fileObj?.message_url}
            download={fileObj?.name ?? 'adeel'}
            target="_blank"
          >
            <VStack py={0.5} space={2}>
              <FileAddOutlined size={16} />
              <Divider mt={1} />
              <VStack space={1}>
                <Text {...STATIC_PROPS.NORMAL_14_FONT} fontWeight={400}>
                  {fileObj?.name ?? 'adeel'}
                </Text>
                <Text {...STATIC_PROPS.NORMAL_14_FONT} fontWeight={400}>
                  {fileObj?.size ?? '256kb'}
                </Text>
              </VStack>
            </VStack>
          </LinkDownloader>
        )}
      </Box>
      <Text {...STATIC_PROPS.NORMAL_14_FONT} fontWeight={500}>
        {created_at}
      </Text>
    </HStack>
  );
}

function UrlConvertor(props: {
  hasMessageUrl: RegExpExecArray | null;
  message: string;
}) {
  const { hasMessageUrl, message } = props;
  const isRegexPresent = Array.isArray(hasMessageUrl);
  //cut the first part till link
  const firstPar = isRegexPresent
    ? message.slice(0, hasMessageUrl.index)
    : message;

  //convert url string to link
  const middlePart = isRegexPresent ? (
    <Link href={hasMessageUrl[0]} color={AppColors.primaryColor}>
      {hasMessageUrl[0]}
    </Link>
  ) : (
    <></>
  );
  //part the preceed after link
  const lastPart = isRegexPresent
    ? message.slice(hasMessageUrl.index + hasMessageUrl[0].length, -1)
    : '';

  return (
    <>
      {firstPar}
      {middlePart}
      {lastPart}
    </>
  );
}
