import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../fairbase.auth";
const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(username);

  const sinUp = async (email, password, userdisplayname) => {
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: userdisplayname,
    });
    const user = auth.currentUser;
    setUsername({
      ...user,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUsername(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await signOut(auth);
  };
  const googleLogin = async () => {
    const loginFacebook = new GoogleAuthProvider();
    await signInWithPopup(auth, loginFacebook);
  };

  const varyFayEmail = async () => {
    await sendEmailVerification(auth.currentUser);
  };

  const ForGotPassWord = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  return (
    <authContext.Provider
      value={{
        sinUp,
        login,
        loading,
        logOut,
        username,
        googleLogin,
        ForGotPassWord,
        varyFayEmail,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
