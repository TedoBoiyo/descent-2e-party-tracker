import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Components


const TrackPlayers = ({players, gameState, setGameState}) => {
    const editPartyHandler = (e) => {
        setGameState('SelectParty');
    }

    return (
        <div className="">
            <Tabs defaultActiveKey="Player 1">
                <Tab eventKey="Player 1" title="Player 1">
                    <div>test</div>
                </Tab>
                <Tab eventKey="Player 2" title="Player 2">
                    <div>test2</div>
                </Tab>
                <Tab eventKey="Player 3" title="Player 3">
                    <div>test3</div>
                </Tab>
            </Tabs>
            <hr />
            <button>Roll Dices</button>
            <button onClick={editPartyHandler}>Edit Party</button>
        </div>
    );
}

export default TrackPlayers;