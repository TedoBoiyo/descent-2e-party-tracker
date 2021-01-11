import React from 'react';

// Components

// Import style sheets

const HeroProfile = ({hero}) => {

    return (
        <div className="col-4" style={{borderRight: "1px solid black"}}>
            <h4 className="hero-name text-left">{"Player"}</h4>
            <img style={{width: "100%"}} src="..\..\..\..\Kaya.JPG" />
            <div>
                <hr />
                Hero Stats
            </div>
        </div>
    );
}

export default HeroProfile;