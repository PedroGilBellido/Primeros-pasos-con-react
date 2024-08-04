import logo from './logo.svg';
import './App.css';
import Component from './Component'; //Esto se importa

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Hola coders!
        </a>
        <Component />  
      </header>
    </div>
  );
}

export default App;
