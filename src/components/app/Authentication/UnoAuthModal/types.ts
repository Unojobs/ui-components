import type React from 'react';

/**Common Modal props */
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
  onClose?: () => void | undefined;
}

export interface IBackArrowProps {
  showBackArrow: boolean;
  backArrowMarginTop: string | number;
  backArrowMarginBottom: string | number;
  backArrowMarginLeft: string | number;
  backArrowMarginRight: string | number;
}

/** Verify OTP Modal Props */
export interface IUnoOTPModalProps extends ICommonModalProps, IBackArrowProps {
  hasErrored?: boolean;
  isInputSecure?: boolean;
  label?: string;
  onVerify?: (values: any) => void | undefined;
  smsSentOn: string;
  onResendOTP?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  isResend: boolean;
  errors?: IOTPErrorProps;
}

/** Forgot password Modal Props */

export interface IUnoForgetPasswordModalProps
  extends ICommonModalProps,
    IBackArrowProps {
  onSubmit?: (values: any) => void | undefined;
  tooltip?: IForgotPUtil;
  placeholder?: IForgotPUtil;
  errors?: IEmailErrorProps;
}

export interface IForgotPUtil {
  email?: string;
}

/** Register new user Modal Props */

export interface IUnoUserRegisterProps
  extends ICommonModalProps,
    IBackArrowProps {
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
  onTermsAndCondition?: () => void | undefined;
  onPrivacyPolicy?: () => void | undefined;
  termAndConditionValues?: ITermsAndConditions;
  errors?: IRegisterErrorProps;
}
export interface ITermsAndConditions {
  linkTextOne?: string;
  linkTextTwo?: string;
  text?: string;
  textSize?: number | string;
  showCheckBox?: boolean;
}

export interface IRegisterUtil {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

/** Create new password Modal Props */

export interface IUnoNewPasswordProps
  extends ICommonModalProps,
    IBackArrowProps {
  onCreate?: (values: any) => void | undefined;
  tooltip?: INewPasswordUtil;
  placeholder?: INewPasswordUtil;
  errors?: IPasswordErrorProps;
}

export interface INewPasswordUtil {
  password?: string;
  confirmPassword?: string;
}

/** Pop up modal props */
export interface IUnoPopUpModalProps {
  text?: string;
  textWidth?: string | number;
  icon?: any;
  maxWidth?: string | number;
  maxHeight?: string | number;
  isOpened: boolean;
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

/** user register error props */
export interface IRegisterErrorProps
  extends IPasswordErrorProps,
    IEmailErrorProps {
  fullName?: IErrorProps;
  checkbox?: string;
}

/** password error props */
export interface IPasswordErrorProps {
  password?: IErrorProps;
  confirmPassword?: IErrorProps;
}

/**email error props */
export interface IEmailErrorProps {
  email?: IErrorProps;
}

/**OTP error props */
export interface IOTPErrorProps {
  otp?: string;
}
export interface IErrorProps {
  required?: string;
  validation?: string;
}
