import React from "react";
import { auth } from "../../firebase";
import { useHistory, useLocation } from "react-router-dom";
export default function Login() {
   const history = useHistory();
   const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };

   const handleLogin = async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
         await auth.signInWithEmailAndPassword(email.value, password.value);
         history.replace(from.pathname);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div>
         <form onSubmit={handleLogin}>
            <ul>
               <li>
                  <label>email</label>
                  <input name="email" type="email" placeholder="email" autoComplete="off"></input>
               </li>
               <li>
                  <label>password</label>
                  <input name="password" type="password" placeholder="pass" autoComplete="off"></input>
               </li>
            </ul>
            <button type="submit">log in</button>
         </form>
      </div>
   );
}
