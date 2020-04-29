import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../hooks/useAuth";

function AuthButton() {
   const { pending, isSignedIn } = useAuth();
   const history = useHistory();

   const logoutHandler = async () => {
      try {
         await auth.signOut();
         history.push("/");
      } catch (err) {
         console.log(err);
      }
   };

   const loginHandler = () => {
      history.push("/login");
   };

   if (pending) {
      return null;
   }

   return isSignedIn ? <button onClick={logoutHandler}>Log out</button> : <button onClick={loginHandler}>Log in</button>;
}
export default AuthButton;
