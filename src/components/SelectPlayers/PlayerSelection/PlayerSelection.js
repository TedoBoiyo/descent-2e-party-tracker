import React, {useState} from 'react';

// Components
import HeroSelection from './HeroSelection/HeroSelection';

// Import style sheets
import './PlayerSelection.css';

const PlayerSelection = ({player, mockData}) => {

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='player-box'>
                    <h5>Player {player.playerId}</h5>
                    <HeroSelection selectionType='Role' selectionList={mockData.playerRole} />
                    <HeroSelection selectionType='Hero' selectionList={mockData.playerHero} />
                    <HeroSelection selectionType='Class' selectionList={mockData.playerClass} />
                </div>
            </div>
        </div>
    );
}

export default PlayerSelection;