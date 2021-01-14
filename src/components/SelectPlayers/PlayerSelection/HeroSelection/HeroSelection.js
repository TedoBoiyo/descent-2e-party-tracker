import React from 'react';

// Functions
import {getHero} from '../../../../content/heroes';

const HeroSelection = ({player, availableHeroes, setAvailableHeroes, players, setPlayers}) => {
    
    const selectHeroHandler = (e) => {
        setPlayers(players.map((el) => {
            if (el.playerId === player.playerId) {
                return {
                    ...el, selectedHero: getHero(e.target.value)
                }
            }
            return el;
        }))
    }

    return (
        <select value={player.selectedHero.name} onChange={selectHeroHandler}> 
            <option value="none">Select Hero</option>
            {availableHeroes.map(hero => (
                <option value={hero.name}>{hero.name}</option>
            ))};
        </select>
    );
}

export default HeroSelection;