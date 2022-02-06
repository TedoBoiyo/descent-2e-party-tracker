import React from 'react';

// Components
import Modal from 'react-bootstrap/esm/Modal';

// Import style sheets
import './ClassCardModal.css';

const ClassCardModal = ({showCardModal, setShowCardModal, classSkillImage}) => {
    return (
        <Modal size="sm" 
            show={showCardModal} 
            onHide={() => setShowCardModal(false)} 
            centered>
            <img className="skill-card" src={process.env.NODE_ENV + classSkillImage} alt='Skill Card' />
        </Modal>
    )
}
export default ClassCardModal;