import logo from './anna-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <Dictionary />
      </header>
      <footer>
        Coded by <a href="https://github.com/annadowding">Anna Dowding</a> and
        is{" "}
        <a href="https://github.com/annadowding/react-dictionary-app">
          open-sourced
        </a>{" "}
        and hosted on{" "}
        <a href="https://superlative-alpaca-174311.netlify.app/">Netlify</a>.
      </footer>
    </div>
  );
}

export default App;
