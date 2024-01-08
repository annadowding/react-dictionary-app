import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
        <div className="container">
      <header className="App-header">
          <img
          src={logo}
          className="App-logo img-fluid"
          alt="logo"
          />
          <Dictionary />
      </header>
        </div>
    </div>
  );
}

export default App;
