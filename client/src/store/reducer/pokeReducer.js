const initialState = {
  pokemons : [],
  pokemon: {},
  faveList: []
}

export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POKEMONS':
      return { ...state, pokemons: state.pokemons = action.payload};
    case 'GET_DETAIL':
      return { ...state, pokemon: state.pokemon = action.payload};
    case 'GET_FAVOURITES':
      return { ...state, faveList: state.faveList = action.payload};
    case 'ADD_FAVOURITE':
      return { ...state, favelist: state.favelist.concat(action.payload)};
    case 'DELETE_FAVOURITE':
      let filtered = state.faveList.filter((fave) => {
        return fave.id !== action.payload
      })
      return { ...state, faveList: state.faveList = filtered };
    default:
      return state;
  }
}