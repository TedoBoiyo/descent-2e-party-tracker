import React from 'react';

// Font-Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

const SelectionErrors = ({playerError}) => {

    return (
        <div className="alert-danger">
            {playerError.some(error => error.errorType === 'Hero') 
                ? <p className="text-danger">
                    <FontAwesomeIcon icon={faExclamationCircle} /> Hero has already been selected by another player!
                </p> : ''}
            {playerError.some(error => error.errorType === 'Class') 
                ? <p className="text-danger">
                    <FontAwesomeIcon icon={faExclamationCircle} /> Class has already been selected by another player!
                </p> : ''}
        </div>
    );
}

export default SelectionErrors;