import React from 'react';

// Components
import TabContainer from 'react-bootstrap/esm/TabContainer';
import Nav from 'react-bootstrap/esm/Nav';

// Import style sheets
import './DisplaySelectedClass.css';

const DisplaySelectedClass = ({player, setClassSkillImage, setShowCardModal}) => {

    function showModalHandler(showModal, image='') {
        if(image)
            setClassSkillImage(image);
        setShowCardModal(showModal);
    }

    return (
        <div className="class-skills">
            <h5>Class Skills</h5>
            <TabContainer>
                <Nav variant="pills" className="flex-column">
                    {player.selectedClass.skills.map((skill, index) => (
                        <Nav.Item key={index}>
                            <Nav.Link onClick={() => showModalHandler(true, skill.image)}>{skill.name}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </TabContainer>
        </div>
    );
}

export default DisplaySelectedClass;