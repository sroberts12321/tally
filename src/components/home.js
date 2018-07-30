import React, {Component} from 'react'
import {connect} from 'react-redux'
let minus = require("../minus.png")
let plus = require("../plus.png")


class Home extends Component {
    constructor(props){
        super(props)
    }

    handleIncrementScoreClick = () =>{
        this.setState({
            player_one_score: this.state.player_one_score + 1,
            player_two_score: this.state.player_two_score + 1
        })
    }

    render() {
        return(
            <div className="pingpong">
                <div className="add button">
                    <img alt="" src={plus}/>
                </div>

                <h1>{this.props.player_one_score}</h1>

                <div className="minus button">
                    <img alt="" src={minus}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        player_one_score : state.player_one_score,
        player_two_score : state.player_two_score
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onIncrementPlayerOneScore : () => dispatch({type : "INCREMENT_PLAYER_ONE_SCORE"}),
        onDecrementPlayerOneScore : () => dispatch({type : "DECREMENT_PLAYER_ONE_SCORE"}),
        onIncrementPlayerTwoScore : () => dispatch({type : "INCREMENT_PLAYER_TWO_SCORE"}),
        onDecrementPlayerTwoScore : () => dispatch({type : "DECREMENT_PLAYER_TWO_SCORE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



{/* <div>
<button onClick = {this.props.onDecrementPlayerOneScore} className="buttons"> - </button>
    <div className="scoreValue">
        <h1>{this.props.player_one_score}</h1>
    </div>
<button onClick = {this.props.onIncrementPlayerOneScore}> + </button>
</div>
<div>
<button onClick = {this.props.onDecrementPlayerTwoScore} className="buttons"> - </button>
    <div className="scoreValue">
        <h1>{this.props.player_two_score}</h1>
    </div>
<button onClick = {this.props.onIncrementPlayerTwoScore}> + </button>
</div> */}