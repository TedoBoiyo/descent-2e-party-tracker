import React from 'react';

// Components

// Import style sheets
import '../HeroProfile.css';

const InternalStats = ({}) => {

    const heroStatCirPos = [
        {
            medCir: {
                top: '-40%',
                right: '50%'
            },
            smallCir: {
                top: '0%',
                right: '40%'
            }
        },
        {
            medCir: {
                top: '25%',
                right: '55%'
            },
            smallCir: {
                top: '40%',
                right: '45%'
            }
        },
        {
            medCir: {
                top: '-40%',
                right: '15%'
            },
            smallCir: {
                top: '0%',
                right: '30%'
            }
        },
        {
            medCir: {
                top: '25%',
                right: '10%'
            },
            smallCir: {
                top: '40%',
                right: '25%'
            }
        },
    ];
    
    return (
        heroStatCirPos.map(stat => (
            <div>
                <div style={{position: 'absolute', top: stat.medCir.top, right: stat.medCir.right}}>
                    <div className="medium-circle"></div>
                </div>
                <div style={{position: 'absolute', top: stat.smallCir.top, right: stat.smallCir.right}}>
                    <div className="small-circle"></div>
                </div>
            </div>
        ))
    );
}

export default InternalStats;