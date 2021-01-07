import React from 'react';

const SelectParty = ({}) => {

    return (
        <div className="selectParty">
            <select name="selectRole">
                <option value="none">Select Role</option>
            </select>
            <select name="selectHero">
                <option value="none">Select Hero</option>
            </select>
            <select name="selectClass">
                <option value="none">Select Class</option>
            </select>
        </div>
    );
}

export default SelectParty;