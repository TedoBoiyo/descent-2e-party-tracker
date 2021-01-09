import React from 'react';

const PageNavigation = ({players, gameState, setGameState}) => {

    const submitPartyHandler = (e) => {
        
    }

    return (
        <div>
            <hr />
            
            <button onClick={submitPartyHandler}>Submit Player{players.length > 1 ? 's' : ''}</button>
        </div>
    );
}

export default PageNavigation;