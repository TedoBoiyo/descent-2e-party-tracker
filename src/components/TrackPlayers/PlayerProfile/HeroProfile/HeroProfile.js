import React from 'react';

// Components
import ExternalStats from './ExternalStats/ExternalStats';
import InternalStats from './InternalStats/InternalStats';

// Import style sheets
import './HeroProfile.css'

const HeroProfile = ({hero}) => {
    
    return (
        <div className="col-4" style={{borderRight: "1px solid black"}}>
            <h4 className="hero-name text-left">{"Player"}</h4>
            <div style={{position: 'relative'}}>
                <img style={{width: "100%"}} src="..\..\..\..\Kaya.JPG" alt='' />
                <ExternalStats />
            </div>
            <hr />
            <div style={{position: 'relative', height: '75px'}}>
                <InternalStats />
            </div>
        </div>
    );
}

export default HeroProfile;