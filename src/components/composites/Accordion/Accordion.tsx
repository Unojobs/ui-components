import React from 'react';
import { Accordion as NBAccordion } from 'native-base';
export const Accordion = React.memo(({ ...props }: any) => {
  return <NBAccordion {...props} />;
});
