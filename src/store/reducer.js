const initialState = {
    player_one_score:0,
    player_two_score:0
}

const reducer = (state = initialState, action)=>{
    if (action.type == "INCREMENT_PLAYER_ONE_SCORE"){
        return {
            ...state,
            player_one_score: state.player_one_score + 1
        }
    } else if (action.type =="DECREMENT_PLAYER_ONE_SCORE"){
        return {
            ...state,
            player_one_score: state.player_one_score - 1            
        }
    } else if (action.type == "INCREMENT_PLAYER_TWO_SCORE"){
        return {
            ...state,
            player_two_score: state.player_two_score + 1
        }
    } else if (action.type =="DECREMENT_PLAYER_TWO_SCORE"){
        return {
            ...state,
            player_two_score: state.player_two_score - 1            
        }
    }
    return state
}

export default reducer