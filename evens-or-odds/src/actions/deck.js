//refactor
//instead of FETCH_DECK_SUCESS and similar, put all states under one variable
import { DECK, DECK_DRAW } from './types'

export const fetchDeckSucess = deckJson => {
    const { remaining, deck_id } = deckJson
    return { type: DECK.FETCH_SUCESS, remaining, deck_id }
}

export const fetchDeckError = error => {
    return {type: DECK.FETCH_ERROR, message: error.message}
}

export const fetchNewDeck = () => dispatch => {
     return fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle')
        .then(response => {
            if( response.status !== 200){
                throw new Error("The request wasn't successful. Try again")
            }
            return response.json()
        })
        .then(json => dispatch(fetchDeckSucess(json)))
        .catch(error => dispatch(fetchDeckError(error)))
}

export const drawCardSucess = json => {
    console.log('json',json)
    return {type: DECK_DRAW.FETCH_SUCCESS, data: json}
}

export const fetchDrawCard = deck_id => dispatch => {
    return fetch(`https://deck-of-cards-api-wrapper.appspot.com/deck/${deck_id}/draw`)
    .then(response => {
        if( response.status !== 200){
            throw new Error("The request wasn't successful. Try again")
        }
        return response.json()
    })
    .then(json => {dispatch({
        type: DECK_DRAW.FETCH_SUCCESS, 
        cards: json.cards, 
        remaining: json.remaining});})
    .catch(error => dispatch({type: DECK_DRAW.FETCH_ERROR, message: error.message}))
}