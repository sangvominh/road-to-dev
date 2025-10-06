import "./App.css";
import { BrowserRouter, Route, Switch, NavLink, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My article</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/*">
            <Redirect to="/about" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
