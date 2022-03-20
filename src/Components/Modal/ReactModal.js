
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


export const ReactModal = (props) => {
    console.log(props);
    const { title, image, description, category } = props.product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <img className='w-50' src={image} alt="" />
                </Modal.Header>
                <Modal.Body>{description.slice(0, 120)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
