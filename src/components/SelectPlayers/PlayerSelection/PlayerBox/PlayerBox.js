import React, {useState} from 'react';

// Components
import RoleSelection from './RoleSelection/RoleSelection';
import HeroSelection from './HeroSelection/HeroSelection';
import ClassSelection from './ClassSelection/ClassSelection';
import SelectionErrors from './SelectionErrors/SelectionErrors';
import DisplaySelection from './DisplaySelection/DisplaySelection';
import ClassCardModal from './ClassCardModal/ClassCardModal';

// Import style sheets
import './PlayerBox.css';

const PlayerBox = ({player, players, setPlayers}) => {

    const [playerError, setPlayerError] = useState([]);
    const [classSkillImage, setClassSkillImage] = useState('');
    const [showCardModal, setShowCardModal] = useState(false);

    return (
        <div className='player-box'>
            <h5>Player {player.playerId}</h5>

            <RoleSelection player={player}
                        players={players}
                        setPlayers={setPlayers}
                        setPlayerError={setPlayerError} />

            {player.selectedRole !== 'none' 
                ? <HeroSelection player={player} 
                                players={players}
                                setPlayers={setPlayers}
                                playerError={playerError}
                                setPlayerError={setPlayerError} /> 
                : ''}

            {player.selectedRole !== 'none'
                ? <ClassSelection player={player}
                                players={players}
                                setPlayers={setPlayers}
                                playerError={playerError}
                                setPlayerError={setPlayerError} />
                : ''}
            
            <SelectionErrors playerError={playerError} />

            {player.selectedHero.name !== 'none' || player.selectedClass.name !== 'none' 
                ? <DisplaySelection player={player} 
                                    setClassSkillImage={setClassSkillImage}
                                    setShowCardModal={setShowCardModal} />
                : ''}
            
                
            <ClassCardModal showCardModal={showCardModal}
                            setShowCardModal={setShowCardModal}
                            classSkillImage={classSkillImage} />
        </div>
    )
}
export default PlayerBox;