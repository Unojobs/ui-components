import type { IAccordionProps } from "native-base";
import type { IAccordionItemProps } from "native-base";
import type { IAccordionSummaryProps } from "native-base";
import type { IAccordionIconProps } from "native-base";
import type { MutableRefObject } from 'react';
export declare type IAccordionComponentType = ((props: IAccordionProps & {
    ref?: MutableRefObject<any>;
}) => JSX.Element) & {
    Item: React.MemoExoticComponent<(props: IAccordionItemProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
    Summary: React.MemoExoticComponent<(props: IAccordionSummaryProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
    Details: React.MemoExoticComponent<(props: {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
    Icon: React.MemoExoticComponent<(props: IAccordionIconProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
};
