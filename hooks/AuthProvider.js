import { createContext, useEffect, useState } from "react"
import { useRouter } from "next/router";
import Cookies from 'js-cookie'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const router = useRouter();
  const cookies = Cookies.get('user');
  const [user, setUser] = useState(cookies || null);

  useEffect(() => {
    if (user !== null) {
      if (typeof user === 'object') {
        try {
          Cookies.set('user', JSON.stringify(user));
          Cookies.set('sessionJWT', user.token);
          if (Cookies.get('user') === 'null') {
            const cookies = Cookies.get('user');
            const verifyCookie = JSON.parse(cookies);
            if (typeof (verifyCookie) !== 'object' || verifyCookie === null) {
              setUser(null);
            }
          }
        } catch (e) {
          setUser(null);
        }
      } else if (typeof user === 'string') {
        try {
          const verifyCookie = JSON.parse(user);
          setUser(verifyCookie)
        } catch (e) {
        }
      }
    } else {
      Cookies.remove('user');
      Cookies.remove('sessionJWT');
    }
  }, [user]);

  const isLogged = () => {
    return Cookies.get('user') ? true : false;
  }

  const logIn = (data) => {
    setUser(data);
    Cookies.set('user', JSON.stringify(data));
    Cookies.set('sessionJWT', data.token);
    router.reload()
  }

  const logOut = () => {
    Cookies.remove('user');
    Cookies.remove('sessionJWT');
    setUser(null);
    router.reload()
  }

  const contextValue = {
    user,
    logIn,
    logOut,
    isLogged
  };

  return (<AuthContext.Provider value={contextValue}>
    {children}
  </AuthContext.Provider>)
}


export default AuthProvider;