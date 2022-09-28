import { Skeleton as SkeletonMain } from './Skeleton';
import { SkeletonText } from './SkeletonText';

const SkeletonTemp: any = SkeletonMain;
SkeletonTemp.Text = SkeletonText;

// To add typings
const Skeleton = SkeletonTemp;
export { Skeleton };
export type { ISkeletonProps } from './types';
