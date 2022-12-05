import React from 'react';
import { Accordion as NBAccordion } from 'native-base';
export const AccordionSummary = React.memo(({ ...props }: any) => {
  return <NBAccordion.Summary {...props} />;
});
