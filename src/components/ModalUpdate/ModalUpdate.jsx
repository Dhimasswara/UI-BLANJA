import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalUpdate({ children, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='btn btn-primary'>
                <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="mb-3">
                            <label for="name_product" class="form-label">Name Product</label>
                            <input type="text" class="form-control" id="name_product" />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" class="form-control" id="price" />
                        </div>
                        <div class="mb-3">
                            <label for="stock" class="form-label">Stock</label>
                            <input type="number" class="form-control" id="stock" />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="photo" class="form-label">Photo Product</label>
                            <input class="form-control" type="file" id="photo"/>
                        </div>



                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <form>
                        <Button variant="success" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdate