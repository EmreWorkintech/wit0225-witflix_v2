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

function App() {
  console.log("Burada");
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
      </Switch>
      <NavController />
    </>
  );
}

export default App;
