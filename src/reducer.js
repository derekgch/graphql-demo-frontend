const initialState = {
}

function reducer (state = initialState, action) {

  console.log('state', state);
  console.log('action', action);

  switch(action.type) {
      case "NEW_SUGGESTIONS":
          return {...state}
      default:
          return state;
  }      
}

export default reducer;