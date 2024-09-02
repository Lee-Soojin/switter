"use client";
import {
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import Header from "../(route)/home/_components/header";
import LoginForm from "../(route)/login/components/login_form";
import { LoginPageLayout } from "@/styles/login-style";

const AuthContext = createContext({});

const contextRef = createRef();

export const AuthProvider = ({ authService, authErrorEventBus, children }) => {
  const [user, setUser] = useState(null);

  useImperativeHandle(contextRef, () => (user ? user.token : null));

  useEffect(() => {
    authErrorEventBus.listen((err) => {
      console.error(err);
      setUser(undefined);
    });
  }, [authErrorEventBus]);

  useEffect(() => {
    authService.me().then(setUser).catch(console.error);
  }, [authService]);

  const signUp = useCallback(
    async (username, password, name, email, url) =>
      authService
        .signUp(username, password, name, email, url)
        .then((user) => setUser(user)),
    [authService]
  );

  const login = useCallback(
    async (username, password) =>
      authService.logIn(username, password).then((user) => setUser(user)),
    [authService]
  );

  const logout = useCallback(
    async () => authService.logout().then(() => setUser(null)),
    [authService]
  );

  const context = useMemo(
    () => ({
      user,
      signUp,
      login,
      logout,
    }),
    [user, signUp, login, logout]
  );

  if (user) {
    return (
      <AuthContext.Provider value={context}>
        <Header />
        {children}
      </AuthContext.Provider>
    );
  } else {
    return (
      <LoginPageLayout>
        <Header />
        <LoginForm signUp={signUp} logIn={login} />
      </LoginPageLayout>
    );
  }
};

export class AuthErrorEventBus {
  constructor() {
    this.callback = null;
  }

  listen(callback) {
    this.callback = callback;
  }

  unlisten(callback) {
    if (this.callback === callback) {
      this.callback = null;
    }
  }

  notify(error) {
    if (this.callback) {
      this.callback(error);
    }
  }
}

export default AuthContext;
export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);
