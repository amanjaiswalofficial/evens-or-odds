import React from 'react';
import {connect} from 'react-redux';


const correctGuessRecord = 'CORRECT_GUESS_RECORD'

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessRecord))

    if(correctGuesses > record){
        localStorage.setItem(correctGuessRecord, correctGuesses)
        return {record: correctGuesses, isNewRecord: true}
    }
    return {record, isNewRecord: false}
}

const GameState = ({remaining, correctGuesses}) => {
    
    const {record, isNewRecord} = checkRecord(correctGuesses)
    const recordLabel = isNewRecord ? 'New Record': 'Record';

    return (
        <div>
            <h3>{recordLabel}: {record}</h3>
            <p>{remaining} Cards Remaining</p>
            <p>No. of correct guess(es): {correctGuesses}</p>
        </div>
    )
}

export default connect(
    ({
        deck: {remaining},
        gameState: {correctGuesses}
    }) => ({remaining, correctGuesses}),

)(GameState)