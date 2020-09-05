import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalDetail = (props) => {

  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false)
  const hadleOpen = () => setShow(true) 

  useEffect(() => {
    setShow(props.status)
  }, [props.status])

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
          <Button onClick={handleClose} variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )


}

export default ModalDetail