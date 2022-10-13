import React from 'react';
import { Accordion } from '../../composites';
import { Text } from '../../primitives';
import type { FaqCardProps } from './types';

export const FaqCard = (props: FaqCardProps): JSX.Element => {
  const { title, description } = props;
  return (
    <Accordion
      w={580}
      maxW="100%"
      bgColor="#fafafa"
      borderWidth={0}
      borderRadius="lg"
    >
      <Accordion.Item>
        <Accordion.Summary
          _hover={{
            bgColor: '#fafafa',
          }}
          _expanded={{
            bgColor: '#fafafa',
          }}
        >
          <Text fontWeight={600}>{title}</Text>
          <Accordion.Icon
            bgColor="#4169e066"
            color="#4169e0"
            borderRadius="full"
            p="1"
            size="6"
          />
        </Accordion.Summary>
        <Accordion.Details>
          <Text color="#707070">{description}</Text>
        </Accordion.Details>
      </Accordion.Item>
    </Accordion>
  );
};

FaqCard.defaultProps = {
  title: 'Are workers background checked ?',
  description:
    'You have the option to background check the worker, once selected using our partner platform',
};
