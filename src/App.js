import Homepg from "./Pages/HomePage";
import GlobalStyled from "./Components/GlobalStyled";
import NavBar from "./Components/NavBar";
import Services from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyled />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepg />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
