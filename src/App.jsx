import "./App.css";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import NavController from "./components/NavController";
import { useState } from "react";

function App() {
  const [activeProfile, setActiveProfile] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/welcome">
          {user ? (
            <Welcome setActiveProfile={setActiveProfile} />
          ) : (
            <Redirect to="/signup" />
          )}
        </Route>
        <Route path="/browse">
          {user ? (
            <Browse activeProfile={activeProfile} />
          ) : (
            <Redirect to="/signup" />
          )}
        </Route>
      </Switch>
      <NavController />
    </>
  );
}

export default App;
