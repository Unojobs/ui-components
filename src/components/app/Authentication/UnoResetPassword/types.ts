export interface IUnoResetPasswordProps {
  heading: string;
  subHeading: string;
  onCreate?: (values: any) => void | undefined;
  onBackArrow?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  tooltip?: IResetUtil;
  buttonText?: string;
  placeholder?: IResetUtil;
}

export interface IResetUtil {
  password: string;
  confirmPassword: string;
}
