import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "./authButton";

function Header({ history }) {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/register">Register</Link>
               </li>
               <li>
                  <Link to="/profile">Profile</Link>
               </li>
            </ul>
         </nav>
         <div>
            <AuthButton></AuthButton>
         </div>
      </header>
   );
}

export default Header;
