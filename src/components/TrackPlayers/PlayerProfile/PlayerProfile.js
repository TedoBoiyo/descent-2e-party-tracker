import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';

// Components
import HeroProfile from './HeroProfile/HeroProfile';
import HeroAbilities from './HeroAbilities/HeroAbilities';
import ClassSkills from './ClassSkills/ClassSkills';

// Import style sheets
import './PlayerProfile.css';

const PlayerProfile = ({players}) => {

    return (
        <Tabs defaultActiveKey="Player 1">
            {players.map(player => (
                <Tab eventKey={"Player " + player.playerId} title={"Player " + player.playerId}>
                    <div className="row">
                        <HeroProfile hero={''} />
                        <HeroAbilities heroAbilities={''} />
                        <ClassSkills skills={''} />
                    </div>
                </Tab>
            ))}
        </Tabs>
    );
}

export default PlayerProfile;