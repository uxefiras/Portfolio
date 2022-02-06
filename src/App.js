import Homepg from "./Pages/HomePage";
import GlobalStyled from "./Components/GlobalStyled";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyled />
        <NavBar />
        <Homepg />
      </header>
    </div>
  );
}

export default App;
