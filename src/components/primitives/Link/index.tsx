import React from 'react';
import { ILinkProps, Link as NBLink } from 'native-base';

export const Link = React.memo(({ ...props }: ILinkProps) => {
  return <NBLink isUnderlined={false} {...props} />;
});
