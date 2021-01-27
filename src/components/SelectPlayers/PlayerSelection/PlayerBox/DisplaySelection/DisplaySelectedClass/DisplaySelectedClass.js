import React from 'react';

// Components
import TabContainer from 'react-bootstrap/esm/TabContainer';
import Nav from 'react-bootstrap/esm/Nav';

// Import style sheets
import './DisplaySelectedClass.css';

const DisplaySelectedClass = ({player, setClassSkillImage, setShowCardModal}) => {

    const showModalHandler = (e) => {
        setClassSkillImage(e);
        setShowCardModal(true);
    }

    return (
        <div className="class-skills">
            <h5>Class Skills</h5>
            <TabContainer>
                <Nav variant="pills" className="flex-column">
                    {player.selectedClass.skills.map((skill, index) => (
                        <Nav.Item key={index}>
                            <Nav.Link onSelect={showModalHandler} eventKey={skill.image}>{skill.name}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </TabContainer>
        </div>
    );
}

export default DisplaySelectedClass;