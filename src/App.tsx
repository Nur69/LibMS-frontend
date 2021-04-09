import Auth from "./features/Auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./features/Auth/Login/Login";
import Register from "./features/Auth/Register/Register";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
