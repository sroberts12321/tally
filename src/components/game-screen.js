import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../index.css';

class GameScreen extends Component {
    constructor(props){
        super(props)
    }

    handleIncrementScoreClick = () =>{
        this.setState({
            score: this.state.score + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick = {this.props.onDecrementScore} className="buttons"> - </button>
                <h1 className="buttons">{this.props.score}</h1>
                <button onClick = {this.props.onIncrementScore} className="buttons"> + </button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        score : state.score
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onIncrementScore : () => dispatch({type : "INCREMENT_SCORE"}),
        onDecrementScore : () => dispatch({type : "DECREMENT_SCORE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)