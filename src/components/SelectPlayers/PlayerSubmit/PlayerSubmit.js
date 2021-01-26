import React, {useState} from 'react';

// Font-Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

const PlayerSubmit = ({players, setGameState}) => {
    const [playerErrors, setPlayerErrors] = useState([]);

    const submitPartyHandler = (e) => {
        let errors = [];

        players.forEach(player => {
            if(player.selectedRole === 'none') 
                errors.push('Player ' + player.playerId + ' has not selected a role.')
            if(player.selectedHero.name === 'none') 
                errors.push('Player ' + player.playerId + ' has not selected a hero.')
            if(player.selectedClass.name === 'none') 
                errors.push('Player ' + player.playerId + ' has not selected a class.')
        });
        
        if(errors.length === 0) 
            setGameState('TrackParty');
        else 
            setPlayerErrors(errors);
    }

    return (
        <div>
            <hr />
            {playerErrors.length > 0 
                ? playerErrors.map((error, index) => 
                    <div key={index} className="alert-danger">
                        <p className="text-danger">
                            <FontAwesomeIcon icon={faExclamationCircle} /> {error}
                        </p>
                    </div>) 
                : ''}
            <button onClick={submitPartyHandler}>Submit Player{players.length > 1 ? 's' : ''}</button>
        </div>
    );
}

export default PlayerSubmit;