import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../CustumInput/CustomInput';
import { getImageUrl } from '../../utils';
import CustomButton from '../CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { LoginCredentials } from '../../types/types';
import { AuthConstants } from '../../constants/AuthConstant';
import styles from './LoginForm.module.scss';

export default function LoginForm() {
  const loginFormRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    userEmail: '',
    userPassword: '',
  });

  useEffect(() => {
    fetch('/data/authdata.json')
      .then((response) => response.json())
      .then((data) => {
        setCredentials(data.credentials);
      })
      .catch((error) => console.error('Error fetching credentials:', error));
  }, []);

  function handleLoginFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginCredentials: LoginCredentials = {
      userEmail: formData.get('userEmail') as string,
      userPassword: formData.get('userPassword') as string,
    };
    if (
      loginCredentials.userEmail === credentials.userEmail &&
      loginCredentials.userPassword === credentials.userPassword
    ) {
      navigate('/');
    } else {
      alert('Invalid credentials. Please try again.');
    }
    if (loginFormRef.current) {
      loginFormRef.current.reset();
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.authContainer}>
        <img
          className={styles.authImg}
          src={getImageUrl('auth/auth.png')}
          alt='profile'
        />
        <div className={styles.content}>
          <h1>{AuthConstants.LOG_IN}</h1>
          <p>{AuthConstants.ENTER_DETAILS}</p>
          <form
            ref={loginFormRef}
            onSubmit={handleLoginFormSubmit}
            className={styles.form}
          >
            <CustomInput
              type='text'
              name='userEmail'
              placeholder='UserEmail'
              className={styles.input}
            />
            <CustomInput
              type='password'
              name='userPassword'
              placeholder='Password'
              className={styles.input}
            />
            <CustomButton
              label='Log In'
              type='submit'
              className={styles.loginButton}
            />
          </form>
          <div className={styles.registerLink}>
            <h4>{AuthConstants.DONT_HAVE_AN_ACCOUNT}</h4>
            <Link to='/register' className={styles.link}>
              {AuthConstants.REGISTER}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
