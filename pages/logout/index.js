import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {

  const { user, logOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!!user) {
      logOut();
    } else {
      router.push('/login')
    }
  }, [user, logOut, router]);

  return (<div className="container">Redirect...</div>);
}

export default Logout;