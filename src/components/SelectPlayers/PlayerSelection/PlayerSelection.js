import React from 'react';

// Components
import PlayerBox from './PlayerBox/PlayerBox';

const PlayerSelection = ({player, players, setPlayers, setClassSkillImage, setShowCardModal}) => {

    return (
        <div className='row'>
            <div className='col-12'>
                <PlayerBox player={player}
                        players={players}
                        setPlayers={setPlayers}
                        setClassSkillImage={setClassSkillImage}
                        setShowCardModal={setShowCardModal} />
            </div>
        </div>
    );
}

export default PlayerSelection;