/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { HStack, Heading, Text } from '../../../primitives';
import { CustomNBButton } from '../../CustomNBButton';
import { PlusOutlined } from '@ant-design/icons';
// MessagesSidebar > TitleWithButton
export interface TitleWithButtonProps {
  titleText: string;
  buttonText: string;
  onClick: () => void;
}
export const TitleWithButton = (props: TitleWithButtonProps) => {
  const { titleText, buttonText, onClick } = props;
  return (
    <HStack
      width={'326px'}
      alignItems={'baseline'}
      justifyContent={'space-between'}
    >
      <Heading fontSize={'3xl'} fontWeight={'semibold'}>
        {titleText}
      </Heading>
      <CustomNBButton onClick={onClick} width={'81px'} height={'40px'}>
        <HStack alignItems={'center'} width={'full'} height={'full'} space={1}>
          <PlusOutlined size={2} style={{ color: '#fff' }} />
          <Text color={'white'} fontSize={'xs'}>
            {buttonText}
          </Text>
        </HStack>
      </CustomNBButton>
    </HStack>
  );
};
