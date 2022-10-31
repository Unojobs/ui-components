import type React from 'react';

export interface IUnoOTPModalProps {
  heading?: string;
  subHeading?: string;
  hasErrored?: boolean;
  isInputSecure?: boolean;
  title?: string;
  label?: string;
  onSubmit?: (values: any) => void | undefined;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  unoLogo: React.FC;
}

export interface IUnoForgetPasswordModalProps {
  heading?: string;
  subHeading?: string;
  title?: string;
  onSubmit?: (values: any) => void | undefined;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  unoLogo: React.FC;
}

export interface IUnoUserRegisterProps {
  title?: string;
  onSubmit?: (values: any) => void | undefined;
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
  unoLogo: React.FC;
}
