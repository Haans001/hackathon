import * as React from "react";

export interface SingupData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: any;
  signup: (data: SingupData) => Promise<any>;
  login: (data: LoginData) => Promise<any>;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  signup: () => {
    throw new Error("Not implemented.");
  },
  login: () => {
    throw new Error("Not implemented.");
  },
  logout: () => {
    throw new Error("Not implemented.");
  },
});

export default AuthContext;
