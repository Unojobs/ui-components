/**
 * @param onChange - is for getting selected radio button which returns string, "undefined" as default e.g, selected radio button is "Employer", onChange = (value:string)=>console.log(value) // output: "Employer"
 * @param list - is for adding radio buttons,  e.g, list = ["Candidate", "Employer"] as default
 * @param size - is for managing size of radio button, "medium" as default e.g, size="medium" or size="small"
 * @param label - is for adding label to Radio Button group, "RadioButtonGroup" as default.
 * @param space - is for adding space between the radio buttons, "20.5px" as default. e.g, space="10px"
 * @param initialValue - is for setting up initial selection of radio button e.g, initialValue="Employer"
 */

export type RadioButtonGroupProps = {
  onChange?: (value: string) => void;
  list: string[];
  size: 'extraLarge' | 'large' | 'medium' | 'small';
  label: string;
  space: string;
  initialValue: string | undefined;
};
