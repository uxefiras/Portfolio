import Homepg from "./Pages/HomePage";
import GlobalStyled from "./Components/GlobalStyled";
import NavBar from "./Components/NavBar";
import Services from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import FooterFor from "./Components/Footer";
import ServicesDetails from "./Pages/ServiceDetails";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyled />
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
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
        </AnimatePresence>
        <FooterFor />
      </header>
    </div>
  );
}

export default App;
