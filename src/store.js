import { createStore } from "redux";

export default createStore(function(state, action) {
    if (state === undefined) {
        return {
            score: 0,
            input: null
        }
    }else if (action.type === 'START') {
        return {...state, score: 0, input: null}
    }else if (action.type === 'CORRECT') {
        return {...state, score: state.score + 1}
    }else if (action.type === 'GU-CLICK') {
        console.log("구 클릭");
        return {...state, input: action.input }
    }
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);