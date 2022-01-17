import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Counter from './Components/Counter/Counter';
export const UserContext = React.createContext();
function App() {
  const state={
    name: "Rejaul karim",
    class: "10"
  };
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={{count, setCount}}>
          <Header></Header>
          <Counter></Counter>
        </UserContext.Provider>

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
