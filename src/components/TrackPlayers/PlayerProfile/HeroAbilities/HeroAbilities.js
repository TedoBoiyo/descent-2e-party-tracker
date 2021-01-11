import React from 'react';

// Components

// Import style sheets

const HeroAbilities = ({heroAbilities}) => {

    return (
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
    );
}

export default HeroAbilities;