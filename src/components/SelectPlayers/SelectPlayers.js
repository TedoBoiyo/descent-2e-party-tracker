import React from 'react';

// Components
import PlayerSelection from './PlayerSelection/PlayerSelection';
import PlayerCount from './PlayerCount/PlayerCount';
import PageNavigation from './PageNavigation/PageNavigation';

const SelectPlayers = ({players, setPlayers}) => {

    const mockData = {
        playerRole: [
            "Healer",
            "Thief",
            "Warrior",
            "Mage"
        ],
        playerHero: [
            "Test1",
            "Test2",
            "Test3",
            "Test4"
        ],
        playerClass: [
            "Class1",
            "Class2",
            "Class3",
            "Class4"
        ]
    };

    return (
        <div className="selectPlayers">
            <PlayerCount players={players} setPlayers={setPlayers} />
            {players.map(player => 
                <PlayerSelection key={player.playerId} player={player} mockData={mockData} />
            )}
            {players.length > 0 ? <PageNavigation players={players} /> : null}
        </div>
    );
}

export default SelectPlayers;