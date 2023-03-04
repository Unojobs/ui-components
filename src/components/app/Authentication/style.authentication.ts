import { AppColors } from '../../utils';

export const style = {
  input: {
    width: 400,
    height: 45,
    borderRadius: 5,
    padding: '12px 20px',
    fontSize: 14,
    color: 'textColors.primary',
    letterSpacing: '0.03em',
  },
  submitButton: {
    width: '400px',
    backgroundColor: AppColors.primaryColor,
    marginBottom: '20px',
  },
  heading: {
    width: 400,
    fontSize: '4xl',
    color: 'textColors.primary',
    fontWeight: 'semibold',
    display: 'block',
    marginTop: 4,
    lineHeight: 'sm',
  },
  subHeading: {
    width: 400,
    fontSize: 'md',
    color: 'textColors.primary',
    fontWeight: 'normal',
    display: 'block',
    marginTop: 2.5,
    marginBottom: 12,
    lineHeight: 'lg',
  },
  userType: {
    marginBottom: 78,
    marginTop: 2.5,
  },
  forgetText: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    color: 'primary.500',
  },
  registerText: {
    color: 'primary.500',
    cursor: 'pointer',
  },
  commonText: {
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: 'lg',
  },
  iconButton: {
    variant: 'outline',
    height: 12,
    width: 50,
    padding: 2,
    borderWidth: 1.5,
    borderColor: 'primary.200',
    borderStyle: 'solid',
    backgroundColor: 'secondary.300',
  },
  smButtonsContainer: {
    width: 400,
    space: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconButton: {
    height: 0,
    fontSize: '5xl',
    cursor: 'pointer',
  },
  backArrowIcon: {
    marginTop: 8,
  },

  modalPosition: {
    backgroundColor: 'secondary.300',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  otpInputStyle: {
    width: 60,
    height: 40,
    border: '1px solid #F3F3F3',
    borderRadius: 5,
  },
  otpErrorInput: {
    border: '1px solid #EB5757',
  },
  otpSeperatorStyle: {
    width: 8,
  },
  resendText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'primary.500',
  },
  socialHoverFocus: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'primary.500',
  },
};
