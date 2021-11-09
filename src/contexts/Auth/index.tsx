import React, { createContext, useCallback, useState } from 'react';

interface AuthContextData {
  signIn(): void;
  signOut(): void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Fake Auth
const useAuth = (): AuthContextData => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = useCallback(() => setIsAuthenticated(true), []);

  const signOut = useCallback(() => setIsAuthenticated(false), []);

  return { signIn, signOut, isAuthenticated };
};

export const withAuthContext = WrappedComponent => {
  const WrapperComponent = props => {
    const auth = useAuth();
    return (
      <AuthContext.Provider value={auth}>
        <WrappedComponent {...props} />
      </AuthContext.Provider>
    );
  };
  return WrapperComponent;
};

export default AuthContext;
