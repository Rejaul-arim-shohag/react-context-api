import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Counter from './Components/Counter/Counter';
export const UserContext = React.createContext();
function App() {
 
  const [category, setCategory] = useState("Laptop");
  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={{category, setCategory}}>
          <Header></Header>
          <Counter></Counter>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
