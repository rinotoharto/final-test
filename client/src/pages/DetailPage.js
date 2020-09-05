import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonDetail } from '../store/action/pokeAction'
import DetailItem from '../components/detailItem'

const DetailPage = () => {

  let { id } = useParams()
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokeReducer.pokemon)

  useEffect(() => {
    dispatch(pokemonDetail(id))
  }, [dispatch])

  return(
    <div className="detail-page">
      <DetailItem pokemon={pokemon}></DetailItem>
    </div>
  )

}

export default DetailPage