import type React from 'react';

export interface ICommonModalProps {
  heading?: string;
  subHeading?: string;
  title?: string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  isOpened: boolean;
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
  unoLogo?: any;
  verticalSpace?: string | number;
  buttonText?: string;
  onClose?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
}

export interface IUnoOTPModalProps extends ICommonModalProps {
  hasErrored?: boolean;
  isInputSecure?: boolean;
  label?: string;
  onVerify?: (values: any) => void | undefined;
  smsSentOn: string;
  onResendOTP?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  isResend: boolean;
}

export interface IUnoForgetPasswordModalProps extends ICommonModalProps {
  onSubmit?: (values: any) => void | undefined;
  tooltip?: IForgotPUtil;
  placeholder?: IForgotPUtil;
}

export interface IForgotPUtil {
  email: string;
}

export interface IUnoUserRegisterProps extends ICommonModalProps {
  onRegister?: (values: any) => void | undefined;
  isCandidate: boolean;
  onGoogleLogin?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onLinkedInLogin?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onFacebookLogin?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  tooltip?: IRegisterUtil;
  placeholder?: IRegisterUtil;
  onTermsAndCondition?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  termAndConditionValues: ITermsAndConditions;
}
export interface ITermsAndConditions {
  fieldName: string;
  linkText: string;
  text: string;
}

export interface IRegisterUtil {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUnoNewPasswordProps extends ICommonModalProps {
  onCreate?: (values: any) => void | undefined;
  tooltip?: INewPasswordUtil;
  placeholder?: INewPasswordUtil;
}

export interface INewPasswordUtil {
  password: string;
  confirmPassword: string;
}
