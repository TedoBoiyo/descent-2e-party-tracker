import React from 'react';


// Components
import PlayerProfile from './PlayerProfile/PlayerProfile';

const TrackPlayers = ({players, gameState, setGameState}) => {
    const editPartyHandler = (e) => {
        setGameState('SelectParty');
    }

    return (
        <div className="">
            <PlayerProfile players={players} />
            <hr />
            <button>Roll Dices</button>
            <button onClick={editPartyHandler}>Edit Party</button>
        </div>
    );
}

export default TrackPlayers;