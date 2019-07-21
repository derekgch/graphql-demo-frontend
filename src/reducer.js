import { NEW_BUCKETS } from './Actions';

const initialState = {
  buckets:[],
  fruits:[],
}

function reducer (state = initialState, action) {

  console.log('state', state);
  console.log('action', action);

  switch(action.type) {
      case NEW_BUCKETS:
          return { ...state, buckets: action.payload }
      default:
          return state;
  }      
}

export default reducer;