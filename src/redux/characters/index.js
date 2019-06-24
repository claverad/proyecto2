const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST'
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL'
const GET_NEXTPAGE_REQUEST = 'GET_NEXTPAGE_REQUEST'
const GET_NEXTPAGE_SUCCESS = 'GET_NEXTPAGE_SUCCESS'
const GET_NEXTPAGE_FAIL = 'GET_NEXTPAGE_FAIL'

export const getNextPageRequest = () => ({ type: GET_NEXTPAGE_REQUEST })

export const getNextPageSuccess = (next) => ({ 
  type: GET_NEXTPAGE_SUCCESS,
  payload: {
    next
  }
})

export const getNextPageFail = (error) => ({
  type: GET_NEXTPAGE_FAIL,
  payload: {
    error
  }
})

export const getCharactersRequest = () => ({ type: GET_CHARACTERS_REQUEST })

export const getCharactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: {
    characters
  }
})

export const getCharactersFail = (error) => ({
  type: GET_CHARACTERS_FAIL,
  payload: {
    error
  }
})

const initialState = {
  entities: [],
  loading: false
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        entities: [
          ...state.entities,
          ...action.payload.characters
        ]
      }
    }

    case GET_CHARACTERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }

    default: return state
  }
}