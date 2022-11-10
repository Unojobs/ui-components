import type { IErrorProps } from './UnoAuthModal/types';

//function to prevent copy paste events
export const preventCopyPaste = (e: any) => {
  e.preventDefault();
  return false;
};

//validate password field

export const passwordValidator = (
  value: string,
  error: IErrorProps | undefined
) => {
  if (/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{10,255})/.test(value)) {
    return '';
  } else {
    if (value.length === 0 || value.match(/^ *$/) !== null) {
      return error?.required;
    }
    return error?.validation;
  }
};

//validate email field

export const emailValidator = (value: string) => {
  if (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(value)) {
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
};

// validate email / phone number input fields

export const validateEmailPhoneNumber = (value: any) => {
  if (isNaN(value)) {
    return 'email';
  } else {
    return 'password';
  }
};

// full name validator
export const fullNameValidator = (
  value: string,
  error: IErrorProps | undefined
) => {
  if (value.length > 255) {
    return error?.validation;
  } else {
    if (value.length === 0 || value.match(/^ *$/) !== null) {
      return error?.required;
    }
    return '';
  }
};
