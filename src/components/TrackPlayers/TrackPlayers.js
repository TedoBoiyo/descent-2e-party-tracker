import React from 'react';


// Components
import PlayerProfile from './PlayerProfile/PlayerProfile';

const TrackPlayers = ({players, setGameState, setClassSkillImage, setShowCardModal}) => {
    const editPartyHandler = (e) => {
        setGameState('SelectParty');
    }

    return (
        <div className="">
            <PlayerProfile players={players}
                            setClassSkillImage={setClassSkillImage}
                            setShowCardModal={setShowCardModal} />
            <hr />
            <button onClick={editPartyHandler}>Edit Party</button>
        </div>
    );
}

export default TrackPlayers;