import React from 'react';
import Form from 'react-bootstrap/Form';

// Components

// Import style sheets

const ClassSkills = ({skills}) => {

    return (
        <div className="col-4">
            <h5>Class Skills</h5>
            <Form>
                <Form.Group>
                    <Form.Check type="checkbox" label="Show selected skills" />
                    <hr />
                    <Form.Check type="checkbox" label="Show selected skills" />
                    <Form.Check type="checkbox" label="Show selected skills" />
                    <Form.Check type="checkbox" label="Show selected skills" />
                </Form.Group>
            </Form>
        </div>
    );
}

export default ClassSkills;