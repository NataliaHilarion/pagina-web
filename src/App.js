import "./App.css";
import Citas from "./components/citas";
import Episodios from "./components/episodios";
import Home from "./components/home";
import Menu from "./components/menu";
import Personajes from "./components/personajes";

function App() {
  const currentURL = window.location.pathname;
  function renderContent() {
    switch (currentURL) {
      case "/":
        return <Home/>
      case "/personajes":
        return <Personajes />
      case "/citas":
        return <Citas/>;
      case "/episodios":
        return <Episodios/>
      default:
       return <Home />;
    }
  }

  return (
    <div className="App">
      <Menu />
      {renderContent()}
    </div>
  );
}

export default App;
