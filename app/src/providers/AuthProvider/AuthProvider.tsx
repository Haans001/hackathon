import * as React from "react";
import { useMutation } from "react-query";
import axios from "../../config/axios";
import AuthContext, {
  AuthContextType,
  LoginData,
  SingupData,
} from "./AuthContext";

const AuthProvider: React.FunctionComponent<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const { mutateAsync: _signup } = useMutation((data: SingupData) =>
    axios.post("/auth/signup", data)
  );

  const { mutateAsync: _login } = useMutation((data: LoginData) =>
    axios.post("/auth/signin", data)
  );

  const [isVeryfing, setIsVeryfing] = React.useState(true);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  React.useEffect(() => {
    axios
      .get("/auth/validate")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        setUser(null);
      })
      .finally(() => {
        setIsVeryfing(false);
      });
  }, []);

  const signup = React.useCallback(
    async (data: SingupData) => {
      try {
        const d = await _signup(data);
        setUser(d.data.user);
        console.log(d.data);
        localStorage.setItem("token", d.data.accessToken);
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    },
    [_signup]
  );

  const login = React.useCallback(
    async (data: LoginData) => {
      try {
        const d = await _login(data);
        setUser(d.data.user);
        console.log(d.data);
        localStorage.setItem("token", d.data.accessToken);
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    },
    [_login]
  );

  const value = React.useMemo<AuthContextType>(
    () => ({
      user,
      signup,
      login,
      logout,
    }),
    [login, signup, user]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isVeryfing && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
