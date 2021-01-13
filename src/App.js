// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';

// Components
import SelectPlayers from './components/SelectPlayers/SelectPlayers';
import TrackPlayers from './components/TrackPlayers/TrackPlayers';

// CSS
import './App.css';

function App() {

  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState('SelectParty');

  return (
    <div className="App">
      <h1>Descent 2E Party Tracker</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {gameState==='SelectParty' ? 
                    <SelectPlayers players={players} 
                    setPlayers={setPlayers}
                    gameState={gameState}
                    setGameState={setGameState} /> :
                    <TrackPlayers players={players}
                    gameState={gameState}
                    setGameState={setGameState} />}
        </div>
      </div>
    </div>
  );
}

export default App;
