// reducers only called when action occurs
// Redux will pass in some start up actions, so have to account for those
// State arg is not he application state.  It is only the state this reducers is responsible for
// if state is undefined, set it yo null
export default function(state = null, action){

    switch(action.type){
        case 'BOOK_SELECTED': return action.payload;
    }

    return state
}