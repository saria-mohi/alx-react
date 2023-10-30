import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>

      </header>
      
        <div className="App-body">
          Login to access the full dashboard
          <br/><br></br><br></br>
          <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />
      <button>OK</button>
        </div>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
      

    </div>
  );
}

export default App;
