import React from 'react';
import { HStack, Text, Heading } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { PlusOutlined } from '@ant-design/icons';
export interface TitleWithBtnProps {
  titleText: string;
  btnText: string;
}
export const TitleWithBtn = (props: TitleWithBtnProps) => {
  const { titleText, btnText } = props;
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // handle modal pop up here
    // eslint-disable-next-line no-console
    console.log(event);
  };
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
        width="81px"
        height="40px"
        backgroundColor="#4169E0"
      >
        <HStack
          alignItems={'center'}
          justifyContent={'center'}
          width={81}
          height={40}
          space={1}
        >
          <PlusOutlined size={4} />
          <Text color={'#fff'} fontSize={'xs'}>
            {btnText}
          </Text>
        </HStack>
      </CustomButton>
    </HStack>
  );
};
