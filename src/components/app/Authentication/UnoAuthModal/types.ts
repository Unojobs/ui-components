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
  loaderSize?: ILoaderSizeType;
  popover?: IPopoverProps;
}

export interface IAddressSearchInputAntdProps {
  name?: string;
  label?: string;
  placeholder?: string;
  requiredMark?: boolean;
  rules?: any[];
  subLabel?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  noDivider?: boolean;
  noLabel?: boolean;
  setLocationDetails?: React.Dispatch<React.SetStateAction<any | null>>;
  initialAddress?: string;
  validateStatus?: '' | 'success' | 'warning' | 'error' | 'validating';
  help?: string;
  onChange?: any;
  isOrgForm?: boolean;
  form?: any;
  isUserAddress?: boolean;
  updateFormField?: string;
  performPlaceDetailsSearch?: any;
  locationApiKey?: any;
  setTextareaRow?: any;
  textareaRow?: any;
}

export interface IPopoverProps {
  text?: string;
  cancelText?: string;
  confirmText?: string;
  placement?: IBackArrowPopoverPlacementType;
}

export declare type ILoaderSizeType = 'sm' | 'lg';

export declare type IBackArrowPopoverPlacementType =
  | 'left'
  | 'right'
  | 'bottom'
  | 'top';

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
  supportText?: string | undefined;
  supportEmail?: string | undefined;
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
  supportEmail?: string;
  supportText?: string;
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
export interface ICustomSelectProps {
  selected: string;
  options: any[];
  onChangeSelect: any;
}
/** Register new user Modal Props */

export interface IUnoUserRegisterProps
  extends ICommonModalProps,
    IBackArrowProps,
    IAddressSearchInputAntdProps,
    ICustomSelectProps {
  onRegister?: (values: IRegisterFormValuesProps) => void | undefined;
  isCandidate: boolean;
  onGoogleLogin?: () => void | undefined;
  onLinkedInLogin?: () => void | undefined;
  onFacebookLogin?: () => void | undefined;
  tooltip?: IRegisterUtil;
  placeholder?: any;
  onTermsAndCondition?: () => void | undefined;
  onPrivacyPolicy?: () => void | undefined;
  termAndConditionValues?: ITermsAndConditions;
  errors?: IRegisterErrorProps;
  minCharPassword?: number | undefined;
  maxCharPassword?: number | undefined;
  joinText?: any;
  joinTextStyle?: any;
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
  password?: string[];
  confirmPassword?: string;
}

export interface IRegisterPlaceholder {
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
  placeholder?: INewPasswordPlaceholder;
  errors?: IPasswordErrorProps;
  minCharPassword?: number | undefined;
  maxCharPassword?: number | undefined;
}
export interface INewPasswordFormValuesProps {
  confirmPassword: string;
  password: string;
}

export interface INewPasswordUtil {
  password?: string[];
  confirmPassword?: string;
}

export interface INewPasswordPlaceholder {
  password?: string;
  confirmPassword?: string;
}

export interface IPasswordErrorProps {
  password?: IPasswordErrors;
  confirmPassword?: IErrorProps;
}

export interface IPasswordErrors {
  required?: string;
  minCharError?: string;
  upperCaseError?: string;
  lowerCaseError?: string;
  specialCharError?: string;
  numberError?: string;
  spaceError?: string;
  validation?: string;
}
