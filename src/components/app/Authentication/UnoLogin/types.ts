export interface IUnoLoginProps {
  heading: string;
  isAdmin: boolean;
  onForgetPassword?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onRegister?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onGoogleLogin?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onLinkedInLogin?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onFacebookLogin?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined | any
  ) => void | undefined;
  onLogin?: (values: any) => void | undefined;
  unoLogo: React.FC;
  isCandidate: boolean;
  setIsCandidate: React.Dispatch<React.SetStateAction<boolean>>;
}
