import React from "react";
import { Accordion as NBAccordion } from "native-base";
export const AccordionItem = ({ ...props }: any) => {
  return <NBAccordion.Item {...props}></NBAccordion.Item>;
};
