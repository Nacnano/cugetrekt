import { createContext, ReactNode, useContext, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { api } from "../utils/axios";

import toast from "react-hot-toast";

import { CredentialDto, ErrorDto } from "../types/dto";

interface IAuthContext {
  isLoggedIn: boolean;
  email: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = (props: AuthProviderProps) => {
  const token = localStorage.getItem("token");
  const localEmail = localStorage.getItem("email");

  const { children } = props;
  const [isLoggedIn, setLoggedIn] = useState(!!token);
  const [email, setEmail] = useState(localEmail);

  const login = async (email: string, password: string) => {
    email = email.trim();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.Authorization);
      localStorage.setItem("email", email);
      setEmail(email);
      setLoggedIn(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err as AxiosError<ErrorDto>;
        const message = response?.data.message;
        if (message) throw new Error(message);
      }
      throw new Error("Unknown error");
    }
  };

  const logout = () => {
    toast.success("Log out successfully");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setEmail(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        email,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
