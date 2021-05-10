import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddEvent from "./screens/AddEvent";
import Events from "./screens/Events";
import Header from "./components/Header";
// import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Events} exact />
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
