import React, { useEffect } from 'react'
import Card from '../components/card'
import { getPokemons, getFavourites } from '../store/action/pokeAction'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokeReducer.pokemons)
  const favourites = useSelector(state => state.pokeReducer.faveList)
  const { path } = useRouteMatch()

  useEffect(() => {
    dispatch(getPokemons())
    dispatch(getFavourites())
  }, [dispatch, favourites])

  return (
    <div className="home-page" >
      <div>
        { path === '/' && <h5 className="owned" >You have {favourites.length === 0 ? 'no' : favourites.length} Pokemon</h5>}
      </div>
      <div className="container">
        {pokemons.map((pokemon, i) => {
          return <Card  pokemon={pokemon} key={i} ></Card>
        })}
      </div>
    </div>
  )
}

export default Home
