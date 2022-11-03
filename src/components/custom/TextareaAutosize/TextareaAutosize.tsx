import React, { forwardRef } from 'react';
import { Input } from 'native-base';
import type { ITextareaAutosize } from './types';

export const TextareaAutosize = forwardRef(
  ({ initialHeight, ...props }: ITextareaAutosize) => {
    const [height, setHeight] = React.useState(initialHeight);

    return (
      <Input
        onContentSizeChange={(e) => setHeight(e.nativeEvent.contentSize.height)}
        placeholder="Text Area Placeholder"
        //@ts-ignore
        style={{
          height: height,
        }}
        multiline
        {...props}
      />
    );
  }
);
