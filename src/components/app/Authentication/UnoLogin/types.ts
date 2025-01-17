export interface IUnoLoginProps {
  heading: string;
  isAdmin: boolean;
  onForgetPassword?: () => void | undefined;
  onRegister?: () => void | undefined;
  onGoogleLogin?: () => void | undefined;
  onLinkedInLogin?: () => void | undefined;
  onFacebookLogin?: () => void | undefined;
  onLogin?: (values: ILoginFormValue) => void | undefined;
  unoLogo?: any;
  isCandidate: boolean;
  setIsCandidate: React.Dispatch<React.SetStateAction<boolean>>;
  tooltip?: ILoginUtil;
  buttonText: string;
  placeholder?: ILoginUtil;
  verticalSpace?: string | number;
  errors?: ILoginErrorProps;
  loading?: boolean;
  loaderColor?: string;
  loaderSize?: ILoaderSizeType;
  supportEmail?: string;
  supportText?: string;
}

export declare type ILoaderSizeType = 'sm' | 'lg';

export interface ILoginFormValue {
  email: string;
  password: string;
  role: string;
}

export interface ILoginUtil {
  email: string;
  password_placeholder: string;
}
export interface ILoginErrorProps {
  email?: IErrorProps;
  password: IErrorProps;
}

export interface IErrorProps {
  required?: string;
  validation?: string;
}
