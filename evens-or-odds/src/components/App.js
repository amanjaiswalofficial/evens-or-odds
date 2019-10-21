import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings'
import Instructions from './Instructions';
import { fetchNewDeck, drawNewCard } from '../actions/deck'
import fetchStates from '../reducers/fetchStates'
import DrawCard from './DrawCard'
import Card from './Card';
import Guess from './Guess';
import GameState from './DrawState';

class App extends Component {
    
    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }

    render()
    {
        //check for value of fetchState, if error, then display message of error
        //otherwise normal execution
        if (this.props.fetchState == fetchStates.error){
            return (
                <div>
                    <p>ERROR 404</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }
        
        return (
            <div>
                <h3>Even, Odd, Whatever...</h3>
                {this.props.gameStarted ? (
                    <div>
                        <h4>Game, now in session.</h4><br/>
                        <GameState/>
                        <Guess/><br/>
                        <DrawCard/><hr/>
                        <Card/>
                        <button onClick={this.props.cancelGame}>Cancel Game</button>
                    </div>
                ):(
                    <div>
                        <h4>Game, No more.</h4><br/>
                        <button onClick={this.startGame}>Start Game</button>
                    </div>
                )
                }
                <Instructions/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    const {
            settings: {gameStarted},
            deck: {fetchState, message},
        } = state
        return {
            gameStarted, fetchState, message
        }

}
    
const componentConnector = connect(
    mapStateToProps, 
    {
        startGame, cancelGame, fetchNewDeck, drawNewCard
    })

export default componentConnector(App);
