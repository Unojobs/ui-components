import type React from 'react';

export interface IUnoOTPModalProps {
  heading?: string;
  subHeading?: string;
  hasErrored?: boolean;
  isInputSecure?: boolean;
  title?: string;
  label?: string;
  onVerify?: (values: any) => void | undefined;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  unoLogo?: React.FC;
  buttonText: string;
}

export interface IUnoForgetPasswordModalProps {
  heading?: string;
  subHeading?: string;
  title?: string;
  onSubmit?: (values: any) => void | undefined;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  unoLogo?: React.FC;
  tooltip?: IForgotPUtil;
  buttonText?: string;
  placeholder?: IForgotPUtil;
}

export interface IForgotPUtil {
  email: string;
}

export interface IUnoUserRegisterProps {
  title?: string;
  onRegister?: (values: any) => void | undefined;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
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
  unoLogo?: React.FC;
  buttonText?: string;
  tooltip?: IRegisterUtil;
  placeholder?: IRegisterUtil;
}

export interface IRegisterUtil {
  email: string;
  password: string;
  confirmPassword: string;
}
