import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Components
import ClassSkills from './ClassSkills/ClassSkills';

const PlayerProfile = ({players, setClassSkillImage, setShowCardModal}) => {

    return (
        <Tabs defaultActiveKey="Player 1">
            {players.map((player, index) => (
                <Tab key={index} eventKey={"Player " + player.playerId} title={"Player " + player.playerId}>
                    <div className="row">
                        <div className="col-8">
                            <img className="hero-card" src={player.selectedHero.image} alt="Player Hero Card" />
                        </div>
                        <div className="col-4">
                            <ClassSkills selectedClass={player.selectedClass} 
                                        setClassSkillImage={setClassSkillImage} 
                                        setShowCardModal={setShowCardModal} />
                        </div>
                    </div>
                </Tab>
            ))}
        </Tabs>
    );
}

export default PlayerProfile;