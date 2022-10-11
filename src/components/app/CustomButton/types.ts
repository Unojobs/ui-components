/**
 * @children
 * @width
 * @height
 * @color
 * @backgroundColor
 * @icon
 * @htmlFor
 * @disabled
 */
export type CustomButtonProps = {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius: string;
  icon?: React.ReactNode;
  disabled: boolean;
  // padding: string;
  // htmlType?: 'button' | 'submit' | 'reset';
};
