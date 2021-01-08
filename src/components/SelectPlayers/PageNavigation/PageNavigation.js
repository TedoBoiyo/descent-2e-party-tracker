import React from 'react';

const PageNavigation = ({players}) => {

    return (
        <div>
            <hr />
            
            <button>Submit Player{players.length > 1 ? 's' : ''}</button>
        </div>
    );
}

export default PageNavigation;