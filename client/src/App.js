import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userList, setUserList] = useState([]);

  return (
    <Router>
      <Route exact path="/">
        <Login
          user={user}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
      </Route>
      <Route exact path="/chat">
        <Chat
          userList={userList}
          setUserList={setUserList}
          user={user}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
      </Route>
    </Router>
  );
};

export default App;
