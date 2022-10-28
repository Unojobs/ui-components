export interface IUnoResetPasswordProps {
  heading: string;
  subHeading: string;
  onSubmit?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onBackArrow?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
}
