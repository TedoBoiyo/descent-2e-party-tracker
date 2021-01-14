import React from 'react';

// Components
import PlayerSelection from './PlayerSelection/PlayerSelection';
import PlayerCount from './PlayerCount/PlayerCount';
import PageNavigation from './PageNavigation/PageNavigation';

const SelectPlayers = ({players, setPlayers, gameState, setGameState}) => {

    return (
        <div className="selectPlayers">
            <PlayerCount players={players} setPlayers={setPlayers} />
            {players.map(player => 
                <PlayerSelection key={player.playerId} player={player} players={players} setPlayers={setPlayers} />
            )}
            {players.length > 0 ? <PageNavigation players={players} gameState={gameState} setGameState={setGameState} /> : null}
        </div>
    );
}

export default SelectPlayers;