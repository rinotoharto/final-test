import React, { useState } from 'react'
import { Button, Modal, Form, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addFavourite } from '../store/action/pokeAction'
import { useHistory, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const DetailItem = (props) => {
  let { id } = useParams()
  const { pokemon } = props
  const [status, setStatus] = useState('')
  const [nickname, setNickname] = useState('')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleClose = () => setShow(false)

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const catchPokemon = () => {
    let successRate = Math.ceil(Math.random() * 2)
    if(successRate > 1) {
      setStatus('successed')
      setShow(true)
    } else {
      setStatus('failed')
      setShow(true)
    }
  }

  const addFave = () => {
    let newFave = {
      nickname,
      imageUrl: pokemon.imageUrl,
      pokemonId: id
    }
    if(nickname) {
      dispatch(addFavourite(newFave))
      Toast.fire({
        icon: 'success',
        title: 'Pokemon added to tour favourite list'
      })
      history.push('/')
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Please input your pokemon nickname'
      })
    }
  }

  return (
    <div className="detail">
      <div className="container">
        <div className="detail-img">
          <img src={pokemon.imageUrl} alt="Pokemon"></img>
        </div>
        <div>
          <Table bordered hover>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{pokemon.name}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{pokemon.type}</td>
              </tr>
              <tr>
                <td>Moves</td>
                <td>{pokemon.moves}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={catchPokemon}>Catch Pokemon</Button>
        </div>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          {status === 'successed' ? 
            <>
              <Modal.Header closeButton>
                <Modal.Title>Congratulations you got this pokemon</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Please enter your pokemon nickname</Form.Label>
                  <Form.Control type="text" placeholder="Enter pokemon nickname" onChange={(e) => {setNickname(e.target.value)}} />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} variant="danger">Close</Button>
                <Button onClick={addFave} variant="primary">Confirm</Button>
              </Modal.Footer>
            </>
          :
            <>
              <Modal.Header>
                <Modal.Title>Ooopss ....</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <p>Failed to catch pokemon</p>
              </Modal.Body>
              <Modal.Footer>
              <Button onClick={handleClose} variant="danger">Close</Button>
              <Button onClick={handleClose} variant="primary">Confirm</Button>
          </Modal.Footer>
            </>
          }
        </Modal>
      </div>
    </div>
  )

}

export default DetailItem