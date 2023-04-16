import type { IPasswordErrors } from './types';

export const validatePassword = (
  value: any,
  errors: IPasswordErrors | undefined,
  minLength: number | undefined,
  maxLength: number | undefined
) => {
  if (value) {
    const minCharLength: number = minLength ? minLength : 10;
    const maxCharLength: number = maxLength ? maxLength : 250;
    if (value.trim() !== value) {
      return Promise.reject(
        errors?.spaceError ?? 'Password can not start or end with a blank space'
      );
    } else if (!/^(?=.*[A-Z])/.test(value)) {
      return Promise.reject(
        errors?.upperCaseError ??
          'Password must contain at least one uppercase letter.'
      );
    } else if (!/^(?=.*[a-z])/.test(value)) {
      return Promise.reject(
        errors?.lowerCaseError ??
          'Password must contain at least one lowercase letter.'
      );
    } else if (!/^(?=.*[@$!%*?&])/.test(value)) {
      return Promise.reject(
        errors?.specialCharError ??
          'Password must contain at least one special character.'
      );
    } else if (!/^(?=.*\d)/.test(value)) {
      return Promise.reject(
        errors?.numberError ?? 'Password must contain at least one number.'
      );
    } else if (value.length < minCharLength) {
      return Promise.reject(
        errors?.minCharError ??
          `Password must be at least ${minCharLength} characters`
      );
    } else if (value.length >= maxCharLength) {
      return Promise.reject(
        errors?.minCharError ??
          `Password must be atmost ${maxCharLength} characters`
      );
    } else {
      return Promise.resolve();
    }
  } else {
    return Promise.resolve();
  }
};
