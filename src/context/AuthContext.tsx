import React, { createContext, useState, ReactNode } from "react";

// Define the AuthContext type
interface AuthContextType {
  isAuthenticated: boolean;
  login: (useremail: string, password: string) => void;
  logout: () => void;
}

// Create the Auth Context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// Hardcoded credentials
const hardcodedUseremail = "test@gmail.com";
const hardcodedPassword = "test@12345";

// Define the AuthProvider props type
interface AuthProviderProps {
  children: ReactNode;
}

// Auth Provider Component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Function to handle login
  const login = (useremail: string, password: string) => {
    if (useremail === hardcodedUseremail && password === hardcodedPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("authToken", "validToken"); // Optionally set a token
    } else {
      alert("Invalid useremail or password");
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
