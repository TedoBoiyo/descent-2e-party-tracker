import React from 'react';

// Components

// Import style sheets
import '../HeroProfile.css';

const ExternalStats = () => {

    return (
        [...Array(4)].map((el, index) => (
            <div>
                <div style={{position: 'absolute', top: 5 + (index * 25) + '%', right: '20px'}}>
                    <div className="medium-circle"></div>
                </div>
                <div style={{position: 'absolute', top: (index * 25) + '%', right: '-40px'}}>
                    <div className="large-circle"></div>
                </div>
            </div>
        ))
    );
}

export default ExternalStats;