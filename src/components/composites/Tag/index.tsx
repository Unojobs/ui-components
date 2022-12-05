import React from 'react';
import { ITagProps, Tag as NBTag } from 'native-base';

export const Tag = React.memo(({ ...props }: ITagProps) => {
  return <NBTag {...props} />;
});
