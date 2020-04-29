import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, Register, NotFound, Profile } from "./pages";
import { Header, ProtectedRoute } from "./components";
import { db, auth } from "./firebase";
function App() {
   console.log(auth.currentUser);
   useEffect(() => {
      const fetchData = async (__) => {
         //get
         const data = await db.collection("people").get();
         const result = data.docs.map((doc) => doc.data());
         console.log(result);
         // post
         // const data1 = await db.collection("people").doc("1").set({ name: "jora" });
         // delete
         // const data2 = await db.collection("people").doc("1").delete();
         // put
         // const data3 = await db.collection("people").doc("1").update({ xxx: "asasa" });
      };
      fetchData();
   }, []);
   return (
      <Router>
         <Header></Header>
         <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/login" mastNotBeAuthed>
               <Login />
            </ProtectedRoute>
            <ProtectedRoute path="/register" mastNotBeAuthed>
               <Register />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" mastBeAuthed>
               <Profile></Profile>
            </ProtectedRoute>
            <Route path="*" component={NotFound} />
            {/* <Route path="/auth" component={AuthExample} /> */}
         </Switch>
      </Router>
   );
}

export default App;
