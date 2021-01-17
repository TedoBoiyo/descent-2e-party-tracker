import React from 'react';

// Functions
import {getClassList, getClassSkills} from '../../../../content/class-skills';

const ClassSelection = ({player, players, setPlayers, playerError, setPlayerError}) => {
    
    const selectClassHandler = (e) => {
        let filterClasses = players.map(player => player.selectedClass.name);
        let updatedPlayerError = [...playerError];

        if (filterClasses.includes(e.target.value)) {
            if (!playerError.some(error => error.errorType === 'Class')) {
                updatedPlayerError.push({
                    errorId: playerError.length,
                    errorType: 'Class'
                })
                setPlayerError(updatedPlayerError);
            }
        } else {
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

            setPlayerError(playerError.filter(error => error.Type === 'Class'))
        }
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