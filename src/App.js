import React, {useState} from 'react';

// Components
import SelectPlayers from './components/SelectPlayers/SelectPlayers';
import TrackPlayers from './components/TrackPlayers/TrackPlayers';
import ClassCardModal from './components/ClassCardModal/ClassCardModal';

// CSS
import './App.css';

function App() {

  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState('SelectParty');
  const [classSkillImage, setClassSkillImage] = useState('');
  const [showCardModal, setShowCardModal] = useState(false);

  return (
    <div className="App">
      <h1>Descent 2E Party Tracker</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {gameState==='SelectParty' 
            ? <SelectPlayers players={players} 
                              setPlayers={setPlayers}
                              setGameState={setGameState}
                              setClassSkillImage={setClassSkillImage}
                              setShowCardModal={setShowCardModal} /> 
            : <TrackPlayers players={players}
                            setGameState={setGameState}
                            setClassSkillImage={setClassSkillImage}
                            setShowCardModal={setShowCardModal} />}
        </div>
      </div>
      <ClassCardModal showCardModal={showCardModal}
                      setShowCardModal={setShowCardModal}
                      classSkillImage={classSkillImage} />
    </div>
  );
}

export default App;
