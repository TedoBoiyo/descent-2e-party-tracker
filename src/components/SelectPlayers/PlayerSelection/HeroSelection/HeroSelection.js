import React from 'react';

// CSS
import './HeroSelection.css';

// Functions
import {getHeroList, getHero} from '../../../../content/heroes';

const HeroSelection = ({player, players, setPlayers, playerError, setPlayerError}) => {
    const selectHeroHandler = (e) => {
        let filterHeroes = players.map(player => player.selectedHero.name)
        let updatedPlayerError = [...playerError];
        
        if (filterHeroes.includes(e.target.value)) {
            if (!playerError.some(error => error.errorType === 'Hero')) {
                updatedPlayerError.push({
                    errorId: playerError.length,
                    errorType: 'Hero'
                })
                setPlayerError(updatedPlayerError);
            }
        } else {
            setPlayers(players.map((el) => {
                if (el.playerId === player.playerId) {
                    return {
                        ...el, selectedHero: getHero(e.target.value)
                    }
                }
                return el;
            }))

            setPlayerError(playerError.filter(error => error.Type === 'Hero'))
        }
    }

    let heroList = getHeroList(player.selectedRole);
    heroList.sort();

    return (
        <select value={player.selectedHero.name} onChange={selectHeroHandler}> 
            <option value="none">Select Hero</option>
            {heroList.map(hero => (
                <option value={hero}>{hero}</option>
            ))};
        </select>
    );
}

export default HeroSelection;