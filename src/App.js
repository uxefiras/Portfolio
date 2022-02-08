import Homepg from "./Pages/HomePage";
import GlobalStyled from "./Components/GlobalStyled";
import NavBar from "./Components/NavBar";
import Services from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import FooterFor from "./Components/Footer";
import ServicesDetails from "./Pages/ServiceDetails";
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
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/services/:id">
            <ServicesDetails />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <FooterFor />
      </header>
    </div>
  );
}

export default App;
