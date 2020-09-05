import React, { useEffect } from 'react'
import Card from '../components/card'
import { getFavourites } from '../store/action/pokeAction'
import { useDispatch, useSelector } from 'react-redux'

const FavouritePage = () => {
  
  const dispatch = useDispatch()
  const favourites = useSelector(state => state.pokeReducer.faveList)
  console.log(favourites)
  useEffect(() => {
    dispatch(getFavourites())
  }, [dispatch])

  return (
    <div>
      <div className="container">
        {!favourites.length && <p>You dont have any pokemon</p>}
        {favourites.map((pokemon, i) => {
          return <Card pokemon={pokemon} ></Card>
      })}
      </div>
    </div>
  )
}

export default FavouritePage
