import { Accordion as AccordionMain } from './Accordion';

import { AccordionItem } from './AccordionItem';
import { AccordionSummary } from './AccordionSummary';
import { AccordionDetails } from './AccordionDetails';
import { AccordionIcon } from './AccordionIcon';
import type { IAccordionComponentType } from './types';

const AccordionTemp: any = AccordionMain as IAccordionComponentType;
AccordionTemp.Item = AccordionItem;
AccordionTemp.Summary = AccordionSummary;
AccordionTemp.Details = AccordionDetails;
AccordionTemp.Icon = AccordionIcon;
// @ts-ignore
AccordionItem.displayName = 'Accordian.Item';
// @ts-ignore
AccordionSummary.displayName = 'Accordion.Summary';
// @ts-ignore
AccordionDetails.displayName = 'Accordion.Details';
// @ts-ignore
AccordionIcon.displayName = 'Accordion.Icon';

// To add typings
const Accordion: any = AccordionTemp as IAccordionComponentType;
export { Accordion };
