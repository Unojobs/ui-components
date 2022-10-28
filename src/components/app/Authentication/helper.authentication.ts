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
