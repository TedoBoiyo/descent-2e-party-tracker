import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';

// Components
import SelectPlayers from './components/SelectPlayers/SelectPlayers';

// CSS
import './App.css';

function App() {

  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState('SelectParty');

  return (
    <div className="App">
      <h1>Descent 2E Party Tracker</h1>

      {gameState='SelectParty' ? <SelectPlayers players={players} 
                     setPlayers={setPlayers}
                     gameState={gameState}
                     setGameState={setGameState} /> : ''}
      

      {/* Character Tracker  */}
      
      
    </div>
  );
}

export default App;
