import React from 'react';

// Import style sheets
import './PlayerCount.css';

const PlayerCount = ({players, setPlayers}) => {
    
    // Events
    const selectPlayerCountHandler = (e) => {
        let selectedPlayerCount = e.target.value;
        let activePlayers = [...players];

        if (selectedPlayerCount !== activePlayers.length) {
            if (selectedPlayerCount > activePlayers.length) {
                for (let i = activePlayers.length + 1; i <= selectedPlayerCount; i++) {
                    activePlayers.push({
                        playerId: i,
                        selectedHero: null
                    });
                }
            } else if (selectedPlayerCount < activePlayers.length) {
                for (let i = activePlayers.length; i > selectedPlayerCount; i--) {
                    activePlayers.pop();
                }
            }
            
            setPlayers(activePlayers);
        }
    };

    return (
        <div>
            <h4 className="select-player-count">How many players are playing?</h4>
            <select name="selectPlayers" onChange={selectPlayerCountHandler} value={players.length}>
                {[...Array(5)].map((el, index) => (
                    <option value={index}>{index}</option>
                ))};
            </select>

            <hr />
        </div>
    );
}

export default PlayerCount;