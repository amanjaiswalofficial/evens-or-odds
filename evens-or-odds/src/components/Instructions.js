import React from 'react';
import { connect } from 'react-redux';
import { expandInstruction, collapseInstruction } from '../actions/settings'

const Instructions = props => {
    //Pulling all 3 things,1 state variable and other 2 methods that will act on it
    const { instructionExpanded, expandInstruction, collapseInstruction } = props
    if (instructionExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>For every draw the deck is shuffled</p>
                <p>Choose whether next card will be even or odd</p>
                <p>See how many do you get right in a row</p>
                <p>Face cards don't count</p>
                <br/>
                <button onClick={collapseInstruction}>Show Less</button>
            </div>
        )}
    else{
        return (
            <div>
                <h3>Instructions</h3>
                <p>There should be some instructions but there aren't.</p><br/>
                <button onClick={expandInstruction}>Show More</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return{
        expandInstruction: () => dispatch(expandInstruction()),
        collapseInstruction: () => dispatch(collapseInstruction())
    };
}

export default connect(state => 
    ({
    instructionExpanded: state.settings.instructionExpanded
    }), 
    mapDispatchToProps)(Instructions)