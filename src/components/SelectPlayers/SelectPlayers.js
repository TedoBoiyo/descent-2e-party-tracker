import React from 'react';

// Components
import PlayerSelection from './PlayerSelection/PlayerSelection';
import PlayerCount from './PlayerCount/PlayerCount';
import PlayerSubmit from './PlayerSubmit/PlayerSubmit';

const SelectPlayers = ({players, setPlayers, gameState, setGameState}) => {

    return (
        <div className="selectPlayers">
            <PlayerCount players={players} setPlayers={setPlayers} />
            {players.map(player => 
                <PlayerSelection key={player.playerId} player={player} players={players} setPlayers={setPlayers} />
            )}
            {players.length > 0 ? <PlayerSubmit players={players} setGameState={setGameState} /> : null}
        </div>
    );
}

export default SelectPlayers;