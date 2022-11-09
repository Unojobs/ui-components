//function to prevent copy paste events
export const preventCopyPaste = (e: any) => {
  e.preventDefault();
  return false;
};

//validate password field

export const passwordValidator = (value: string) => {
  if (/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{10,})/.test(value)) {
    return Promise.resolve();
  } else {
    return Promise.reject();
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
