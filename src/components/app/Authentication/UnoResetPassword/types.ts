export interface IUnoResetPasswordProps {
  heading: string;
  subHeading: string;
  onSubmit?: (values: any) => void | undefined;
  onBackArrow?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
}
