import React from 'react';

// Functions
import {getClassList, getClassSkills} from '../../../../content/class-skills';

const ClassSelection = ({player, players, setPlayers}) => {
    
    const selectClassHandler = (e) => {
        let result = {
            name: e.target.value,
            skills: getClassSkills(e.target.value)
        }

        setPlayers(players.map((el) => {
            if (el.playerId === player.playerId) {
                return {
                    ...el, selectedClass: result
                }
            }
            return el;
        }))
    }

    let classList = getClassList(player.selectedRole);
    classList.sort();

    return (
        <select value={player.selectedClass.name} onChange={selectClassHandler}> 
            <option value="none">Select Class</option>
            {classList.map($class => (
                <option value={$class}>{$class}</option>
            ))};
        </select>
    );
}

export default ClassSelection;