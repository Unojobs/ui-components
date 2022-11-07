export type LoginProps = {
  type?:
    | 'login-home'
    | 'forget-password'
    | 'OTP-verification'
    | 'new-password'
    | 'create-account'
    | 'admin-dashboard';
  loginButton(): string;
  loginWithGoogle(): string;
  loginWithLinkedin(): string;
  heading: string;
  subHeading: string;
  backButton(): string;
  forgetPassword(): string;
  registerUser(): string;
  login(): string;
  images: string[];
};
