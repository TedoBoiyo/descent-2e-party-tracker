import React from 'react';

// Components

// Import style sheets

const HeroProfile = ({hero}) => {
    
    const largeCircle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        borderRadius: "50%",
        width: 75,
        height: 75,
        border: "1px solid black"
    }

    const mediumCircle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        borderRadius: "50%",
        width: 50,
        height: 50,
        border: "1px solid black"
    }

    const smallCircle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        borderRadius: "50%",
        width: 30,
        height: 30,
        border: "1px solid black"
    }

    return (
        <div className="col-4" style={{borderRight: "1px solid black"}}>
            <h4 className="hero-name text-left">{"Player"}</h4>
            <div style={{position: 'relative'}}>
                <img style={{width: "100%"}} src="..\..\..\..\Kaya.JPG" />
                {[...Array(4)].map((el, index) => (
                    <div>
                        <div style={{position: 'absolute', top: 5 + (index * 25) + '%', right: '20px'}}>
                            <div style={mediumCircle}></div>
                        </div>
                        <div style={{position: 'absolute', top: (index * 25) + '%', right: '-40px'}}>
                            <div style={largeCircle}></div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div style={{position: 'relative', height: '75px'}}>
                {[...Array(4).map((el, index) => (
                    <div>
                        <div style={{position: 'absolute', top: '-40%', right: '50%'}}>
                            <div style={mediumCircle}></div>
                        </div>
                        <div style={{position: 'absolute', top: '0%', right: '40%'}}>
                            <div style={smallCircle}></div>
                        </div>
                    </div>
                ))]}
                <div style={{position: 'absolute', top: '-40%', right: '50%'}}>
                    <div style={mediumCircle}></div>
                </div>
                <div style={{position: 'absolute', top: '0%', right: '40%'}}>
                    <div style={smallCircle}></div>
                </div>
                
                <div style={{position: 'absolute', top: '25%', right: '55%'}}>
                    <div style={mediumCircle}></div>
                </div>
                <div style={{position: 'absolute', top: '40%', right: '45%'}}>
                    <div style={smallCircle}></div>
                </div>

                <div style={{position: 'absolute', top: '-40%', right: '15%'}}>
                    <div style={mediumCircle}></div>
                </div>
                <div style={{position: 'absolute', top: '0%', right: '30%'}}>
                    <div style={smallCircle}></div>
                </div>
                
                <div style={{position: 'absolute', top: '25%', right: '10%'}}>
                    <div style={mediumCircle}></div>
                </div>
                <div style={{position: 'absolute', top: '40%', right: '25%'}}>
                    <div style={smallCircle}></div>
                </div>
            </div>
        </div>
    );
}

export default HeroProfile;