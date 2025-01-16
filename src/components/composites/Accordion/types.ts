import type { IAccordionProps } from 'native-base';
import type { IAccordionItemProps } from 'native-base';
import type { IAccordionSummaryProps } from 'native-base';

import type { IAccordionIconProps } from 'native-base';
import type { MutableRefObject } from 'react';

export type IAccordionComponentType = ((
  props: IAccordionProps & { ref?: MutableRefObject<any> }
) => any) & {
  Item: React.MemoExoticComponent<
    (props: IAccordionItemProps & { ref?: MutableRefObject<any> }) => any
  >;
  Summary: React.MemoExoticComponent<
    (props: IAccordionSummaryProps & { ref?: MutableRefObject<any> }) => any
  >;
  Details: React.MemoExoticComponent<
    (props: { ref?: MutableRefObject<any> }) => any
  >;
  Icon: React.MemoExoticComponent<
    (props: IAccordionIconProps & { ref?: MutableRefObject<any> }) => any
  >;
};
