import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { removePokemon } from '../store/action/pokeAction'

const ItemCard = (props) => {
  
  const { path } = useRouteMatch()
  const { pokemon } = props
  const dispatch = useDispatch()

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

  const release = (pokemonId) => {
    Swal.fire({
      title: `Are you sure you want to release this pokemon ?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, release it!'
    })
    .then((result) => {
      if (result.value) {
        dispatch(removePokemon(pokemonId))
        Toast.fire({
          icon: 'success',
          title: 'Pokemon Released'
        })
      }
    })
  }

  return(
      <Card className="card" style={{ width: '12rem' }}>
        {path === '/' ? 
          <>
            <Card.Img variant="top" src={pokemon.imageUrl} />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Button variant="primary" size="sm">
                <Link data-testid="detail-link" className="detail-link" to={`/detail/${pokemon.url.split('/')[6]}`}>Detail</Link>
              </Button>
            </Card.Body>
          </>
          :
          <>
            <Card.Img variant="top" src={pokemon.imageUrl} />
            <Card.Body>
              <Card.Title>{pokemon.nickname}</Card.Title>
              <div class="button">
                <Button variant="primary" size="sm">
                  <Link data-testid="detail-link" className="detail-link" to={`/detail/${pokemon.pokemonId}`}>Detail</Link>
                </Button>
                <Button onClick={() => {release(pokemon.id)}} variant="success" size="sm">
                  Release
                </Button>
              </div>
            </Card.Body>
          </>
        }
      </Card>
  )

}

export default ItemCard