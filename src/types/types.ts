export interface CustomButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface LoginCredentials {
  userEmail: string;
  userPassword: string;
}

export interface RegisterCredentials {
  userName: string;
  userEmail: string;
  userPassword: string;
}

export type Credentials = LoginCredentials | RegisterCredentials;
