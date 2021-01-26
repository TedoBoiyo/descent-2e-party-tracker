import React from 'react';

// Components
import DisplaySelectedClass from './DisplaySelectedClass/DisplaySelectedClass'; 

// Import style sheets
import './DisplaySelection.css';

const DisplaySelection = ({player, setClassSkillImage, setShowCardModal}) => {

    return ( 
        <div>
            {player.selectedHero.name !== 'none' || player.selectedClass.name !== 'none' 
                ? <div className="player-selection">
                    {player.selectedHero.name !== 'none' 
                        ? <img className="hero-card" src={process.env.PUBLIC_URL + player.selectedHero.image} alt='Hero Card' /> : ''}
                    {player.selectedClass.name !== 'none'
                        ? <DisplaySelectedClass player={player}
                                                setClassSkillImage={setClassSkillImage}
                                                setShowCardModal={setShowCardModal} />
                        : ''}
                </div> : ''}
        </div>
    );
}

export default DisplaySelection;