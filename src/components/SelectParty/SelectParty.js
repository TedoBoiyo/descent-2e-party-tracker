import React from 'react';

const SelectParty = ({}) => {

    const mockData = {
        selectRole: [
            "Healer",
            "Thief",
            "Warrior",
            "Mage"
        ],
        selectHero: [
            "Test1",
            "Test2",
            "Test3",
            "Test4"
        ],
        selectClass: [
            "Class1",
            "Class2",
            "Class3",
            "Class4"
        ]
    };

    return (
        <div className="selectParty">
            <div>
                <select name="selectPlayers">
                    <option></option>
                </select>
            </div>
            <select name="selectRole">
                <option value="none">Select Role</option>
                {mockData.selectRole.map(role => (
                    <option value={role}>{role}</option>
                ))};
            </select>
            <select name="selectHero">
                <option value="none">Select Hero</option>
                {mockData.selectHero.map(hero => (
                    <option value={hero}>{hero}</option>
                ))};
            </select>
            <select name="selectClass">
                <option value="none">Select Class</option>
                {mockData.selectClass.map(heroClass => (
                    <option value={heroClass}>{heroClass}</option>
                ))};
            </select>
        </div>
    );
}

export default SelectParty;