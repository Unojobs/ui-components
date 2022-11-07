import React from 'react';
import { HStack, Text, Heading } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { PlusOutlined } from '@ant-design/icons';
export interface TitleWithBtnProps {
  titleText: string;
  btnText: string;
  handleClick: (event?: any) => void;
}
export const TitleWithBtn = (props: TitleWithBtnProps) => {
  const { titleText, btnText, handleClick } = props;
  return (
    <HStack
      width={326}
      height={40}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Text>
        <Heading size={'2xl'} fontWeight={'semibold'}>
          {titleText}
        </Heading>
      </Text>
      <CustomButton
        onClick={handleClick}
        width={81}
        height={40}
        backgroundColor="primary.500"
      >
        <HStack
          alignItems={'center'}
          justifyContent={'center'}
          width={'81px'}
          height={'40px'}
          space={1}
        >
          <PlusOutlined size={4} />
          <Text color={'white'} fontSize={'xs'}>
            {btnText}
          </Text>
        </HStack>
      </CustomButton>
    </HStack>
  );
};
