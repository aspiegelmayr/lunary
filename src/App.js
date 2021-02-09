import './App.css';
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import Selection from "./Selection"
import Stylesheet from "./Stylesheet"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" expand="lg">
  <Navbar.Brand style={{color:"white"}} href="/home">Lunary</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse style={{color: "white"}} id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{color:"white"}} href="/home">Home</Nav.Link>
      <Nav.Link style={{color:"white"}} href="/stylesheet">Stylesheet</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
          <Route path="/home">
            <Selection />
          </Route>
          <Route path="/stylesheet">
            <Stylesheet />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
