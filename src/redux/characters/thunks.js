import axios from "axios";
import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFail,
  getNextPageRequest,
  getNextPageSuccess,
  getNextPageFail

} from './index'

const baseApiUrl = 'https://rickandmortyapi.com/api/character/'

export const getCharacters = () => {
  return async (dispatch, getState) => {
    dispatch(getCharactersRequest())

    try {
      const response = await axios.get(baseApiUrl)
      dispatch(
        getCharactersSuccess(response.data.results)
      )
    } catch (e) {
      const error = new Error(e)

      dispatch(getCharactersFail(error.toString()))
    }   
  }
}

export const getNextPage = () => {
  return async (dispatch) => {
    dispatch(getNextPageRequest())

    try {
      const response = await axios.get(baseApiUrl)
      console.log('respuesta',response)
      dispatch(
        getNextPageSuccess(response.data.info.next)
      )
      
    } catch (e) {
      const error = new error(e)
      dispatch(getNextPageFail(error.toString()))  
    }
  }
}
