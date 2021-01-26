import React from 'react';

// Data Set
import {roles} from '../../../../../content/roles';

const RoleSelection = ({player, players, setPlayers, setPlayerError}) => {
    
    const selectRoleHandler = (e) => {
        setPlayers(players.map((el) => {
            if (el.playerId === player.playerId) {
                el.selectedHero = {name: 'none'};
                el.selectedClass= {name: 'none', skills: {}};
                return {
                    ...el, selectedRole: e.target.value
                }
            }
            return el;
        }))

        setPlayerError([]);
    }

    return (
        <select value={player.selectedRole} onChange={selectRoleHandler}> 
            <option value="none">Select Role</option>
            {roles.map((role, index) => (
                <option key={index} value={role}>{role}</option>
            ))};
        </select>
    );
}

export default RoleSelection;