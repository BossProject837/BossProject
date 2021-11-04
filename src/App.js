import "./App.css";
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Proyectos from "./components/proyects/Proyectos";
import Footer from "./components/layout/Footer";
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/proyectos" component={Proyectos} />
          </Switch>
          <Footer></Footer>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
