import type { IAccordionProps } from 'native-base';
import type { IAccordionItemProps } from 'native-base';
import type { IAccordionSummaryProps } from 'native-base';

import type { IAccordionIconProps } from 'native-base';
import type { MemoExoticComponent, MutableRefObject, ReactElement } from 'react';

export type IAccordionComponentType = ((
  props: IAccordionProps & { ref?: MutableRefObject<any> }
) => ReactElement) & {
  Item: MemoExoticComponent<
    (
      props: IAccordionItemProps & { ref?: MutableRefObject<any> }
    ) => ReactElement
  >;
  Summary: MemoExoticComponent<
    (
      props: IAccordionSummaryProps & { ref?: MutableRefObject<any> }
    ) => ReactElement
  >;
  Details: MemoExoticComponent<
    (props: { ref?: MutableRefObject<any> }) => ReactElement
  >;
  Icon: MemoExoticComponent<
    (
      props: IAccordionIconProps & { ref?: MutableRefObject<any> }
    ) => ReactElement
  >;
};
