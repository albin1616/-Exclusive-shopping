import { Credentials, ValidationErrors } from "../../types/types";

export const validateForm = (
  credentials: Credentials,
  formType: "login" | "register",
) => {
  const errors: ValidationErrors = {};

  if (formType === "register" && "userName" in credentials) {
    if (!credentials.userName) {
      errors.userName = "Username is required";
    }
  }

  if (!credentials.userEmail) {
    errors.userEmail = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(credentials.userEmail)) {
    errors.userEmail = "Email is invalid";
  }

  if (!credentials.userPassword) {
    errors.userPassword = "Password is required";
  } else if (credentials.userPassword.length < 6) {
    errors.userPassword = "Password must be at least 6 characters";
  }

  return errors;
};
