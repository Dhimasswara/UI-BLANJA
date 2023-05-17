import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ChooseAddress() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className='p-0 m-0' variant="primary" onClick={handleShow}>
        Launch demo modal
      </p>

      <Modal show={show} onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
  
      >
        
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{minHeight: '500px'}}>
            <span className='fw-bolder fs-5 d-block text-center mb-4'>Choose another address</span>
            <button className='p-3 rounded text-secondary mb-2' style={{borderStyle: 'dashed', width: '100%', borderColor: 'gray', backgroundColor: 'white'}}>Add New Address</button>
            <div className="address mt-4 p-3 border border-danger border-2 rounded" >
                <p className='fw-bolder'>Dhimas Pandu Yogaswara</p>
                <span className="d-block">
                  Kp. Lubang Buaya, Kec. Setu, Kab. Bekasi, Jawa Barat 17320
                  [Blanja Note : Blok A]
                </span>
                <button className='text-danger fw-bolder btn p-0 m-0 border-0 pt-3'>Change address</button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChooseAddress