import type React from 'react';

/**
 *@param width {string} - is for setting button's width, 160px as default e.g, width="100px"
 *@param height {string} - is for setting button's height, 48px as default e.g, height="100px"
 *@param color {string} - is for setting color of button's text, '#ffffff' as default e.g, color="#ffffff" Note: Pass hex color
 *@param backgroundColor {string} - is for setting background color of button, '#4169E0' as default e.g, backgroundColor="#4169E0'"
 *@param icon {react.ReactNode}- is for setting prefix icon e.g, icon={icon}
 *@param disabled {boolean} - is for disabling the button, false as default e.g, disabled={true | false}
 *@param textMarginLeft {string} - is for adding left margin to the button's text, undefind as default e.g, textMarginLeft="10px"
 *@param onClick {function} - is for handling onClick event, undefined as default e.g, onClick={(e:React.MouseEvent<HTMLElement>)=>handleOnClick()}
 *@param borderWidth {string} - is for adding border width, e.g, borderWidth="1px"
 *@param borderColor {string} - is for adding border Color, e.g, borderColor="#4169E0"
 *@param borderStyle {string} - is for adding border Style, e.g, borderWidth="solid"
 */
export type CustomButtonProps = {
  children: any;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  width?: string | number;
  height?: string | number;
  color?: string;
  backgroundColor?: string;
  borderRadius: string;
  icon: React.ReactNode | undefined;
  disabled: boolean;
  textMarginLeft: string;
  borderWidth: string | undefined;
  borderColor: string | undefined;
  borderStyle: string | undefined;
  htmlType?: 'button' | 'submit' | 'reset';
  display?: string;
  flexDirection?: string;
};
