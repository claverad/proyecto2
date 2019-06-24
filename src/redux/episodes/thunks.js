import axios from "axios";
import {
  getEpisodesFail,
  getEpisodesRequest,
  getEpisodesSuccess
} from './index'


const baseApiUrlEpisodes = 'https://rickandmortyapi.com/api/episode/'

export const getEpisodes = () => {
  return async (dispatch, getState) => {
    dispatch(getEpisodesRequest())

    try {
      const response = await axios.get(baseApiUrlEpisodes)

      dispatch(
        getEpisodesSuccess(response.data.results)
      )
    } catch (e) {
      const error = new Error(e)

      dispatch(getEpisodesFail(error.toString()))
    }   
  }
}