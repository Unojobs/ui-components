import React from 'react';
import { Accordion as NBAccordion } from 'native-base';
export const AccordionIcon = React.memo(({ ...props }: any) => {
  return <NBAccordion.Icon {...props} />;
});
