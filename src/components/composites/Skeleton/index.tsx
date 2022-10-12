import type { ISkeletonProps } from 'native-base';
import { Skeleton as SkeletonMain } from './Skeleton';
import { SkeletonText } from './SkeletonText';

const SkeletonTemp: any = SkeletonMain;
SkeletonTemp.Text = SkeletonText;

// To add typings
const Skeleton: any = SkeletonTemp as ISkeletonProps;
export { Skeleton };
export type { ISkeletonProps } from './types';
