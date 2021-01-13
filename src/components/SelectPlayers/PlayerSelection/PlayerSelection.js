import React, {useState} from 'react';

// Components
import HeroSelection from './HeroSelection/HeroSelection';

// Import style sheets
import './PlayerSelection.css';

// Import data sets
import {roles} from '../../../content/roles';
import {heroes} from '../../../content/heroes';

const PlayerSelection = ({player, mockData}) => {
    heroes.sort(function(a, b) {
        if(a.name > b.name) {
            return 1;
        }
        if(a.name < b.name) {
            return -1;
        }
        return 0;
    })

    const [availableHeroes, setAvailableHeroes] = useState(heroes);

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='player-box'>
                    <h5>Player {player.playerId}</h5>
                    <HeroSelection selectionType='Role' selectionList={roles} />
                    <HeroSelection selectionType='Hero' selectionList={availableHeroes} />
                    {/* <HeroSelection selectionType='Class' selectionList={mockData.playerClass} /> */}
                </div>
            </div>
        </div>
    );
}

export default PlayerSelection;