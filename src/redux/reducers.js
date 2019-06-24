import { combineReducers } from 'redux'
import characterReducer from './characters'
import episodeReducer from './episodes'
import userReducer from './users'

export default combineReducers({
  characters: characterReducer,
  episodes: episodeReducer,
  users: userReducer,
})
