import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';

// Components
import SelectPlayers from './components/SelectPlayers/SelectPlayers';

// CSS
import './App.css';

function App() {

  const [players, setPlayers] = useState([]);

  return (
    <div className="App">
      <h1>Descent 2E Party Tracker</h1>

      <SelectPlayers players={players} 
                   setPlayers={setPlayers} />

      {/* Character Tracker  */}
      
      
    </div>
  );
}

export default App;
