import type { IAvatarProps } from 'native-base';
import { Avatar as AvatarDefault } from './Avatar';
import { Badge as AvatarBadge } from './Badge';
import { AvatarGroup } from './Group';

let AvatarTemp: any = AvatarDefault;
AvatarTemp.Badge = AvatarBadge;
AvatarTemp.Group = AvatarGroup;

// To add typings
const Avatar: any = AvatarTemp as IAvatarProps;

export { Avatar };
export type { IAvatarProps } from 'native-base';
