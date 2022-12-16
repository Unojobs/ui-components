import React from 'react';
import { Typeahead as NBTypeahead } from 'native-base';

export const Typeahead = React.memo(({ ...props }: any) => {
  return <NBTypeahead {...props} />;
});
