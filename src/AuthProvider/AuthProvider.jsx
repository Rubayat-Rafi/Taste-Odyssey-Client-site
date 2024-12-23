import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import{app} from '../Firebase/firebase.init'
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a new user with email and password
  const handleRegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update resgister user profile 
  const handleUpdateprofile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
  }
  
  // signIn User with email and password
  const handleSignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

   //google login user
  const handleGoogleLoginUser = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

   //logout user
   const handleLogOutUser = ()=> {
    setLoading(true);
    return signOut(auth)
   }


// A security guard for the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  console.log(user)

  const authInfo = {
    user,
    setUser,
    handleRegisterUser,
    loading,
    handleUpdateprofile,
    handleSignInUser,
    handleLogOutUser,
    handleGoogleLoginUser,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
