import React from 'react';
import {Modal, Button, Form, FormControl} from "react-bootstrap"
const CreateType = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl 
                        placeholder={"Enter the name of the type: "}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "outline-danger" onClick={onHide}>Close</Button>
                <Button variant = "outline-success" onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType;