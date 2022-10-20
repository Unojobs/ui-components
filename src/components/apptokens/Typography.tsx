import React from 'react';
import { Heading, Text } from '../primitives';

export const Typography = () => {
  return (
    <>
      <Text fontWeight="normal" fontSize="md">
        This is Urbanist
      </Text>
      <Heading fontSize="8xl" color="landingPrimary.500">
        Modren
      </Heading>
      <Text fontSize="appmedium">Hellloo</Text>
      <Text fontFamily="body" fontWeight="600">
        this is font from cutom theme
      </Text>
    </>
  );
};
