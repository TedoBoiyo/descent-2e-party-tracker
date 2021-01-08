import React from 'react';

// Import style sheets
import './PlayerCount.css';

const PlayerCount = ({players, setPlayers}) => {

    const playerCount = [1,2,3,4];

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
            <h3>How many players are playing?</h3>
            <select name="selectPlayers" onChange={selectPlayerCountHandler}>
                <option value={0}>0</option>
                {playerCount.map(count => (
                    <option value={count}>{count}</option>
                ))};
            </select>

            <hr />
        </div>
    );
}

export default PlayerCount;