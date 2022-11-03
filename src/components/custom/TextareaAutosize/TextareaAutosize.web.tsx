// import React from 'react';
// import { Factory, useTheme } from 'native-base';
// import { StyleSheet } from 'react-native';
// import type { ITextareaAutosize } from './types';
// import { View } from 'react-native';
// import './TextareaAutosize.module.css';
// const TextareaAutosizeComponent = ({
//   children,
//   initialHeight,
//   style,
//   dataSet: _dataset,
//   ...restProps
// }: any) => {
//   console.log('🚀 ~ restProps', restProps);
//   const flattenStyle = StyleSheet.flatten(style);

//   const [isFocused, setIsFocused] = React.useState(false);
//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);
//   const focusStyles = isFocused
//     ? { borderColor: '#3a5ec9', boxShadow: `0 0 0 1px #3a5ec9` }
//     : {};

//   return (
//     <View
//       style={{
//         ...flattenStyle,
//         ...focusStyles,
//       }}
//     >
//       <span
//         {...restProps}
//         className="textArea"
//         style={{
//           overflow: 'auto',
//           minHeight: initialHeight,
//           outline: 'none',
//         }}
//         role="textbox"
//         contentEditable
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         placeholder="Hello There We are here"
//         color="red"
//       >
//         {children}
//       </span>
//     </View>
//   );
// };

// export const TextareaAutosize = ({ children, ...props }: ITextareaAutosize) => {
//   const theme = useTheme();
//   //@ts-ignore
//   const textareaAutosizeTheme = theme.components['TextareaAutosize'] ?? {};
//   console.log(
//     '🚀 ~ TextareaAutosize ~ textareaAutosizeTheme',
//     textareaAutosizeTheme
//   );

//   const FactoryTextareaAutosize = Factory(
//     TextareaAutosizeComponent,
//     textareaAutosizeTheme
//   );

//   return (
//     <FactoryTextareaAutosize {...props}>{children}</FactoryTextareaAutosize>
//   );
// };
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
