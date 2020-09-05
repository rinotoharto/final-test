import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar responsive bg="dark" variant="dark">
      <Navbar.Brand>Pokemon</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="link" to="/"> Home </Link>
          <Link className="link" to="/favourites">My Pokemon</Link>
        </Nav>
    </Navbar>
  )
}

export default Navigation