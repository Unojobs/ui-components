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
  loading?: boolean;
  loaderColor?: string;
  loaderSize?: 'sm' | 'lg';
}

export interface IBackArrowProps {
  showBackArrow: boolean;
  backArrowMarginTop: string | number;
  backArrowMarginBottom: string | number;
  backArrowMarginLeft: string | number;
  backArrowMarginRight: string | number;
}

export interface IErrorProps {
  required?: string;
  validation?: string;
}

/** Verify OTP Modal Props */
export interface IUnoOTPModalProps extends ICommonModalProps, IBackArrowProps {
  hasErrored?: boolean;
  isInputSecure?: boolean;
  label?: string;
  onVerify?: (values: IOTPFormValuesProps) => void | undefined;
  smsSentOn: string;
  onResendOTP?: () => void | undefined;
  isResend: boolean;
  errors?: IOTPErrorProps;
}

export interface IOTPFormValuesProps {
  otp: string;
}

export interface IOTPErrorProps {
  otp?: string;
}

/** Forgot password Modal Props */

export interface IUnoForgetPasswordModalProps
  extends ICommonModalProps,
    IBackArrowProps {
  onSubmit?: (values: IForgotPasswordFormValuesProps) => void | undefined;
  tooltip?: IForgotPUtil;
  placeholder?: IForgotPUtil;
  errors?: IEmailErrorProps;
  isCandidate: boolean;
  isAdmin: boolean;
}

export interface IForgotPasswordFormValuesProps {
  email: string;
  role: string;
}

export interface IForgotPUtil {
  email?: string;
}

export interface IEmailErrorProps {
  email?: IErrorProps;
}

/** Register new user Modal Props */

export interface IUnoUserRegisterProps
  extends ICommonModalProps,
    IBackArrowProps {
  onRegister?: (values: IRegisterFormValuesProps) => void | undefined;
  isCandidate: boolean;
  onGoogleLogin?: () => void | undefined;
  onLinkedInLogin?: () => void | undefined;
  onFacebookLogin?: () => void | undefined;
  tooltip?: IRegisterUtil;
  placeholder?: IRegisterUtil;
  onTermsAndCondition?: () => void | undefined;
  onPrivacyPolicy?: () => void | undefined;
  termAndConditionValues?: ITermsAndConditions;
  errors?: IRegisterErrorProps;
}

export interface IRegisterFormValuesProps {
  confirmPassword: string;
  email: string;
  fullName: string;
  password: string;
  termsAndCondition: boolean;
  role: string;
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

export interface IRegisterErrorProps
  extends IPasswordErrorProps,
    IEmailErrorProps {
  fullName?: IErrorProps;
  checkbox?: string;
}

/** Create new password Modal Props */

export interface IUnoNewPasswordProps
  extends ICommonModalProps,
    IBackArrowProps {
  onCreate?: (values: INewPasswordFormValuesProps) => void | undefined;
  tooltip?: INewPasswordUtil;
  placeholder?: INewPasswordUtil;
  errors?: IPasswordErrorProps;
}
export interface INewPasswordFormValuesProps {
  confirmPassword: string;
  password: string;
}

export interface INewPasswordUtil {
  password?: string;
  confirmPassword?: string;
}

export interface IPasswordErrorProps {
  password?: IErrorProps;
  confirmPassword?: IErrorProps;
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
