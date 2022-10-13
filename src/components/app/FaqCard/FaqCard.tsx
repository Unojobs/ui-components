import React from 'react';
import { Accordion } from 'src/components/composites/Accordion/Accordion';
import { AccordionDetails } from 'src/components/composites/Accordion/AccordionDetails';
import { AccordionIcon } from 'src/components/composites/Accordion/AccordionIcon';
import { AccordionItem } from 'src/components/composites/Accordion/AccordionItem';
import { AccordionSummary } from 'src/components/composites/Accordion/AccordionSummary';
import { Box, Text } from 'src/components/primitives';
import type { FaqCardProps } from './types';

export const FaqCard = (props: FaqCardProps): JSX.Element => {
  const { title, description } = props;
  return (
    <Accordion
      w={580}
      maxW="100%"
      bgColor="#fafafa"
      borderWidth={0}
      borderRadius="md"
    >
      <AccordionItem>
        <AccordionSummary
          _hover={{
            bgColor: '#fafafa',
          }}
          _expanded={{
            bgColor: '#fafafa',
          }}
        >
          <Text fontWeight={600}>{title}</Text>
          <Box bgColor="#4169E069" p={1} borderRadius="full">
            <AccordionIcon color="#4169E0" />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Text color="#707070">{description}</Text>
        </AccordionDetails>
      </AccordionItem>
    </Accordion>
  );
};

FaqCard.defaultProps = {
  title: 'Are workers background checked ?',
  description:
    'You have the option to background check the worker, once selected using our partner platform',
};
