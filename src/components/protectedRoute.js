import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children, ...rest }) {
   const { isSignedIn, pending } = useAuth();
   const render = ({ location }) => {
      if (pending) {
         return <p>waiting</p>;
      }
      if (rest.mastBeAuthed) {
         return isSignedIn ? children : <Redirect to={{ pathname: "/login", state: { from: location } }} />;
      }
      if (rest.mastNotBeAuthed) {
         return !isSignedIn ? children : <Redirect to={{ pathname: "/" }} />;
      } else {
         throw new Error("In 'ProtectedRoute', 'mastBeAuthed' or 'mastNotBeAuthed' prop must be provided");
      }
   };
   return <Route {...rest} render={render} />;
}
