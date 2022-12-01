import React from 'react';
import { Center } from 'src/components/composites';
import { Heading } from 'src/components/primitives';
import { CustomNBButton } from '../CustomNBButton';

interface ErrorProps {
  error: string;
  reload: () => void;
}
export const ErrorPage = (props: ErrorProps) => {
  const { error, reload } = props;
  return (
    <Center height="100%">
      <Heading marginBottom={4}>{error}</Heading>
      <CustomNBButton onClick={reload}>Reload</CustomNBButton>
    </Center>
  );
};

ErrorPage.defaultProps = {
  error: 'Something Went wrong Plase try again !',
};
