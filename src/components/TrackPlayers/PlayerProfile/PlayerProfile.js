import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';

// Components

// Import style sheets
import './PlayerProfile.css';

const PlayerProfile = ({players}) => {

    return (
        <Tabs defaultActiveKey="Player 1">
            {players.map(player => (
                <Tab eventKey={"Player " + player.playerId} title={"Player " + player.playerId}>
                    <div className="row">
                        <div className="col-4" style={{borderRight: "1px solid black"}}>
                            <h4 className="hero-name text-left">{"Player " + player.playerId}</h4>
                            <img style={{width: "100%"}} src="..\..\..\..\Kaya.JPG" />
                            <div>
                                <hr />
                                Hero Stats
                            </div>
                        </div>
                        <div className="col-4" style={{borderRight: "1px solid black"}}>
                            <div className="hero-ability">
                                <h5>Hero Ability</h5>
                                <p>
                                    Each time a hero adjacent to you suffers 1 or more heart from 
                                    an attack, you recover 1 fatigue.
                                </p>
                            </div>
                            <div className="heroic-feat">
                                <h5>Heroic Feat</h5>
                                <p>
                                    Use during a player's turn to refresh all exhausted
                                    cards in your play area and recover 2 fatigue.
                                </p>
                                <button>USE FEAT</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <h5>Class</h5>
                            <Form>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Show selected skills" />
                                    <hr />
                                    <Form.Check type="checkbox" label="Show selected skills" />
                                    <Form.Check type="checkbox" label="Show selected skills" />
                                    <Form.Check type="checkbox" label="Show selected skills" />
                                </Form.Group>
                            </Form>
                            
                        </div>
                    </div>
                </Tab>
            ))}
        </Tabs>
    );
}

export default PlayerProfile;