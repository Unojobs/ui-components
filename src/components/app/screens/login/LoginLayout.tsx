import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LoginStyle.css';
export interface ILoginProps {
  type?:
    | 'login-home'
    | 'forget-password'
    | 'OTP-verification'
    | 'new-password'
    | 'create-account';
  loginButton(): string;
  loginWithGoogle(): string;
  loginWithLinkedin(): string;
  heading: string;
  subHeading: string;
  backButton(): string;
}
export const Login = () => {
  return (
    <div className="parent">
      <div className="carouselDiv">
        <Carousel autoPlay={true} showThumbs={false}>
          <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Carousel>
      </div>
    </div>
  );
};
Login.defaultProps = {
  heading: 'Welcome to Unojob',
  subHeading: 'Please first select you as what here?',
  loginButton: () => alert('logging'),
  loginWithGoogle: () => alert('login with google'),
  loginWithLinkedin: () => alert('login with facebook'),
  backButton: () => alert('Back button'),
  type: 'login-home',
};
