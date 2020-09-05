import axios from 'axios'
const faveUrl = 'http://localhost:3001'
const pokeApi = 'https://pokeapi.co/api/v2/pokemon'
const detailUrl = 'https://pokeapi.co/api/v2/pokemon'

export function getFavourites() {
  return(dispatch) => {
    axios({
      url: `${faveUrl}/list`,
      method: 'GET',
    })
    .then(({ data }) => {
      console.log(data, 'action')
      dispatch({
        type: 'GET_FAVOURITES',
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function addFavourite(pokemon) {
  return(dispatch) => {
    axios({
      url: `${faveUrl}/list`,
      method: 'POST',
      data: pokemon
    })
    .then(({ data }) => {
      dispatch({
        type: 'ADD_FAVOURITE',
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function removePokemon(pokemonId) {
  return(dispatch) => {
    axios({
      url:`${faveUrl}/list/${pokemonId}`,
      method:'DELETE'
    })
    .then(response => {
      dispatch({
        type:'DELETE_FAVOURITE',
        payload: pokemonId
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function getPokemons() {
  return(dispatch) => {
    let pokemons = []
    axios({
      url: pokeApi,
      method: 'GET'
    })
    .then(( {data} ) => {
      for (let i = 0; i < data.results.length; i++) {
        pokemons.push({
          name: data.results[i].name,
          url: data.results[i].url,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
        })
      }
      dispatch({
        type: 'GET_POKEMONS',
        payload: pokemons
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function pokemonDetail(pokemonId) {
  return(dispatch) => {
    axios({
      url: `${detailUrl}/${pokemonId}`,
      method: 'GET'
    })
    .then(({data}) => {
      let moves = []
      let type = []
      for (let i = 0; i < 3; i++) {
        moves.push(data.moves[i].move.name)
      }
      for (let j = 0; j < data.types.length; j++) {
        type.push(data.types[j].type.name)
      }
      let pokemon = {
        name: data.species.name,
        moves: moves.join(', '),
        type: type.join(', '),
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
      }
      dispatch({
        type: 'GET_DETAIL',
        payload: pokemon
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}