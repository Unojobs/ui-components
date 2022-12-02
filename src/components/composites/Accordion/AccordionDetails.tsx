import React from 'react';
import { Accordion as NBAccordion } from 'native-base';
export const AccordionDetails = React.memo(({ ...props }: any) => {
  return <NBAccordion.Details {...props} />;
});
