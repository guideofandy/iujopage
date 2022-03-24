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
      try {
        Cookies.set('user', JSON.stringify(user));
        if (Cookies.get('user') === 'null') {
          const cookies = Cookies.get('user');
          const verifyCookie = JSON.parse(cookies);
          if (typeof (verifyCookie) !== 'object' || verifyCookie === null) {
            setUser(null);
          }
        }
      } catch (e) {
        console.log('Aqui')
        setUser(null);
      }
    } else {
      Cookies.remove('user');
    }
  }, [user]);

  const isLogged = () => {
    return Cookies.get('user') ? true : false;
  }

  const logIn = (data) => {
    setUser(data);
    router.push('/dashboard')
  }

  const logOut = () => {
    Cookies.remove('user');
    setUser(null);
    router.push("/")
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