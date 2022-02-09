import './App.css';
import Side from './components/Sidebar/index';
import Main from "./pages/landing-page/index";
import Foot from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <Side />
      <Main />
      <Foot />
    </div>
  );
}

export default App;
