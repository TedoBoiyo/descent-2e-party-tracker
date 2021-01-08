import React from 'react';

const HeroSelection = ({selectionType, selectionList}) => {

    return (
        <select>
            <option value="none">Select {selectionType}</option>
            {selectionList.map(selection => (
                <option value={selection}>{selection}</option>
            ))};
        </select>
    );
}

export default HeroSelection;