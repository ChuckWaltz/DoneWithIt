import { useContext } from 'react';
import AuthContext from './auth';
import authStorage from './storage';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken: string) => {
    const user = jwtDecode(authToken);

    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut, setUser };
};

export default useAuth;
