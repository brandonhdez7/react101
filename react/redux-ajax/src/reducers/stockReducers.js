// This is a reducer.
// To make a reducer:
// 1. make a function that has 2 params:
//     - state (usually set a default)
//     - action
// 2. The state param comtians THIS reducers state. Just like a variable.
// 3. The action param will contain whatever the object the dispatched action sent us
//     - type (REQUIRED)
//     - payload (data/JSON/stuff)
// 4. Check the action.type to see if I care.
// 4a. If I care, return some new state
// 4b. If I don't care, return state (old state)

function stockReducers(state = null,action){
    switch(action.type){
        case "GET_STOCKS":
        // do some stuff
        // console.log
            return state;
        case "CLEAR_STOCKS":
            return null;
        default:
            // if no other case applies, then default runs
            return state;
    }
}

export default stockReducers;