import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import PropTypes from "prop-types";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem("@AuthFirebase:token");
    sessionStorage.removeItem("@AuthFirebase:user");
  };

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
      if (sessionToken && sessionUser) {
        setUser(JSON.parse(sessionUser)); // Parse para objeto JSON
      } else {
        setUser(null); 
      }
    };
    loadStoreAuth();
  }, []);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <AuthGoogleContext.Provider
      value={{ signInGoogle, signed: !!user, signOut }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};

AuthGoogleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthGoogleContext);
