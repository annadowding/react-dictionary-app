import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
          <img
          src={logo}
          className="App-logo img-fluid"
          alt="logo"
          />
          <Dictionary />
      </header>
      <footer>
        Coded by Anna Dowding
      </footer>
    </div>
  );
}

export default App;
