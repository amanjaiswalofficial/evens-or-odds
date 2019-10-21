import {combineReducers} from 'redux'
//Import other created reducers here to use and export
import settingsReducer from './settings'
import deckReducer from './deck'
import gameStateReducer from './gameState'

//the reducers are now exported as one under different keys
//hence everywhere accessing gameStarted will be accessed under state.settings.gameStarted
//instead of state.gameStarted and similarily for deck variables
export default combineReducers({settings: settingsReducer, deck: deckReducer, gameState: gameStateReducer})