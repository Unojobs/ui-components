/**
 * @param width {string} - is for setting up width of button, "160px" as default e.g, width="50px"
 * @param height {string} - is for setting up height of button, "48px" as default e.g, height="50px"
 * @param color {string} - is for setting up color of button, "#ffffff" as default e.g, color="#ffffff"
 * @param backgroundColor {string} - is for setting up backgroundColor of button, "#1974FC"  e.g, backgroundColor="#1974FC"
 * @param borderRadius {string} - is for setting up borderRadius of button, "5px" as default e.g, borderRadius="5px"
 * @param icon {string} - is for adding icon on left of text of button, undfined as default e.g, icon={icon}
 * @param htmlType {string} - is for setting up type of button, "button" as default e.g, htmlType="button" | htmlType="Submit" | htmlType="Reset"
 * @param border {string} - is for setting up border of button, "none" as default e.g, border="1px solid #1974FC"
 * @param
 */

export interface CustomButtonProps {
  children?: any;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  color?: string;
  backgroundColor?: string;
  borderRadius: string;
  icon?: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  border: string;
  fontFamily?: string;
  pt?: string;
  p?: string;
  disable?: boolean;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  fontWeight?: string;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  margin: string | number;
}
