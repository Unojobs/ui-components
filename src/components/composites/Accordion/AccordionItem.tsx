import React from 'react';
import { Accordion as NBAccordion } from 'native-base';
export const AccordionItem = React.memo(({ ...props }: any) => {
  return <NBAccordion.Item {...props} />;
});
