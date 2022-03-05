import './App.css';
import Loader from "./components/loader/index";
import Nav from './components/Sidebar/nav';
import Main from "./pages/landing-page/index";
import Foot from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Nav />
      <Main />
      <Foot />
    </div>
  );
}

export default App;
