import CustomInput from '../CustumInput/CustomInput';
import { getImageUrl } from '../../utils';
import CustomButton from '../CustomButton/CustomButton';
import { useRef } from 'react';
import styles from './RegisterForm.module.scss';
import { RegisterCredentials } from '../../types/types';
import { AuthConstants } from '../../constants/AuthConstant';

export default function RegisterForm() {
  const registerFormRef = useRef<HTMLFormElement>(null);
  function handleRegisterForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const registerCredentials: RegisterCredentials = {
      userName: formData.get('userName') as string,
      userEmail: formData.get('userEmail') as string,
      userPassword: formData.get('userPassword') as string,
    };
    console.log(registerCredentials);
    if (registerFormRef.current) {
      registerFormRef.current.reset();
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
          <h1> {AuthConstants.CREATE_ACCOUNT}</h1>
          <p> {AuthConstants.ENTER_DETAILS}</p>
          <form
            ref={registerFormRef}
            onSubmit={handleRegisterForm}
            className={styles.form}
          >
            <CustomInput
              type='text'
              name='userName'
              placeholder='Name'
              className={styles.input}
            />
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
              label='Create Account'
              type='submit'
              className={styles.loginButton}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
