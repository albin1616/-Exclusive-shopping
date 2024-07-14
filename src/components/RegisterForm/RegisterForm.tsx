import CustomInput from "../CustumInput/CustomInput";
import { getImageUrl } from "../../utils";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { RegisterCredentials } from "../../types/types";
import { AuthConstants } from "../../constants/AuthConstant";
import { validateForm } from "../Validation/validation";
import styles from "./RegisterForm.module.scss";

export default function RegisterForm() {
  const [errors, setErrors] = useState<{
    userName?: string;
    userEmail?: string;
    userPassword?: string;
  }>({});

  function handleRegisterForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const registerCredentials: RegisterCredentials = {
      userName: formData.get("userName") as string,
      userEmail: formData.get("userEmail") as string,
      userPassword: formData.get("userPassword") as string,
    };
    const formErrors = validateForm(registerCredentials, "register");
    setErrors(formErrors);
  }

  return (
    <section className={styles.container}>
      <div className={styles.authContainer}>
        <img
          className={styles.authImg}
          src={getImageUrl("auth/auth.png")}
          alt="profile"
        />
        <div className={styles.content}>
          <h1> {AuthConstants.CREATE_ACCOUNT}</h1>
          <p> {AuthConstants.ENTER_DETAILS}</p>
          <form onSubmit={handleRegisterForm} className={styles.form}>
            <CustomInput
              type="text"
              name="userName"
              placeholder="Name"
              className={styles.input}
            />
            {errors.userName && (
              <span className={styles.error}>{errors.userName}</span>
            )}
            <CustomInput
              type="text"
              name="userEmail"
              placeholder="UserEmail"
              className={styles.input}
            />
            {errors.userEmail && (
              <span className={styles.error}>{errors.userEmail}</span>
            )}
            <CustomInput
              type="password"
              name="userPassword"
              placeholder="Password"
              className={styles.input}
            />
            {errors.userPassword && (
              <span className={styles.error}>{errors.userPassword}</span>
            )}
            <CustomButton
              label="Create Account"
              type="submit"
              className={styles.registerButton}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
