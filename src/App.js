import {useContext} from "react"
import "./App.css"
import { Route, Switch,Redirect } from "react-router-dom";
import AddEvent from "./screens/AddEvent";
import Events from "./screens/Events";
import Header from "./components/Header";
// import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import { UserContext } from "./contexts/UsersContext";

function App() {
  const {user} = useContext(UserContext)
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            { Object.keys(user).length>0  ? <Redirect to="/events"/> : <Redirect to="/login"/>}
          </Route>
          <Route path="/events" component={Events} />
          <Route path="/addevent" component={AddEvent} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
        </Switch>
      </Container>
    </main>
  );
}

export default App;
