import type { IInputProps } from 'native-base';

export interface ITextareaAutosize extends Omit<IInputProps, 'h' | 'height'> {
  initialHeight: number | string | null | undefined;
}
