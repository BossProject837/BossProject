import "./App.css";
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Proyectos from "./components/proyects/Proyectos";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/proyectos" component={Proyectos} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
