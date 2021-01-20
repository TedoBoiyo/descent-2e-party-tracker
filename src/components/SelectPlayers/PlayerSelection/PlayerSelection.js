import React, {useState} from 'react';

// Components
import RoleSelection from './RoleSelection/RoleSelection';
import HeroSelection from './HeroSelection/HeroSelection';
import ClassSelection from './ClassSelection/ClassSelection';
import Form from 'react-bootstrap/Form';

// Import style sheets
import './PlayerSelection.css';

// Font-Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

const PlayerSelection = ({player, players, setPlayers}) => {

    const [playerError, setPlayerError] = useState([]);

    return (
        <div className='row'>
            <div className='col-12'>
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
                    
                    <div className="alert-danger">
                        {playerError.some(error => error.errorType === 'Hero') 
                            ? <p className="text-danger">
                                <FontAwesomeIcon icon={faExclamationCircle} /> Hero has already been selected by another player!
                            </p> : ''}
                        {playerError.some(error => error.errorType === 'Class') 
                            ? <p className="text-danger">
                                <FontAwesomeIcon icon={faExclamationCircle} /> Class has already been selected by another player!
                            </p> : ''}
                    </div>
                    
                    {player.selectedHero.name !== 'none' || player.selectedClass.name !== 'none' 
                        ? <div style={{height: '490px'}}>
                            {player.selectedHero.name !== 'none' 
                                ? <img className="hero-card" src={process.env.PUBLIC_URL + player.selectedHero.image} alt='Hero Card' /> : ''}
                            {player.selectedClass.name !== 'none'
                                ? <div><h5>Class Skills</h5>
                                <Form>
                                    <Form.Group>
                                        <Form.Check type="checkbox" label="Show selected skills" />
                                        <hr />
                                        <Form.Check type="checkbox" label="Show selected skills" />
                                        <Form.Check type="checkbox" label="Show selected skills" />
                                        <Form.Check type="checkbox" label="Show selected skills" />
                                    </Form.Group>
                                </Form></div> : ''}
                        </div> : ''}
                </div>
            </div>
        </div>
    );
}

export default PlayerSelection;