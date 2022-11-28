import React from 'react';
import {Modal, Button, Form, FormControl} from "react-bootstrap"

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl 
                        placeholder={"Enter the name of the brand: "}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "outline-danger" onClick={onHide}>Close</Button>
                <Button variant = "outline-success" onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;