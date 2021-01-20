import React, {useState} from 'react';

// Components
import RoleSelection from './RoleSelection/RoleSelection';
import HeroSelection from './HeroSelection/HeroSelection';
import ClassSelection from './ClassSelection/ClassSelection';
import TabContainer from 'react-bootstrap/esm/TabContainer';
import Nav from 'react-bootstrap/esm/Nav';
import Modal from 'react-bootstrap/esm/Modal';

// Import style sheets
import './PlayerSelection.css';

// Font-Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

const PlayerSelection = ({player, players, setPlayers}) => {

    const [playerError, setPlayerError] = useState([]);
    const [showSkillModal, setShowSkillModal] = useState(false);
    const [classSkillImage, setClassSkillImage] = useState('');

    const showModalHandler = (image) => {
        setClassSkillImage(image);
        setShowSkillModal(true);
        console.log(image)
    }

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
                        ? <div className="player-selection">
                            {player.selectedHero.name !== 'none' 
                                ? <img className="hero-card" src={process.env.PUBLIC_URL + player.selectedHero.image} alt='Hero Card' /> : ''}
                            {player.selectedClass.name !== 'none'
                                ? <div className="class-skills">
                                    <h5>Class Skills</h5>
                                    <TabContainer>
                                        <Nav variant="pills" className="flex-column">
                                            {player.selectedClass.skills.map(skill => (
                                                <Nav.Item onClick={() => showModalHandler(skill.image)}>
                                                    <Nav.Link eventKey={skill.points}>{skill.name}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                    </TabContainer>
                                    {classSkillImage ? <Modal size="sm" show={showSkillModal} onHide={() => setShowSkillModal(false)} centered>
                                        <img className="skill-card" src={process.env.PUBLIC_URL + classSkillImage} alt='Skill Card' />
                                    </Modal> : ''}
                                </div> : ''}
                        </div> : ''}
                </div>
            </div>
        </div>
    );
}

export default PlayerSelection;