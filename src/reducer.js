import {  NEW_BUCKETS, NEW_FRUITS, NEW_SELECTED, EDIT_FRUIT, 
          NULLIFY_EDIT_FRUIT } from './Actions';

const initialState = {
  buckets:[],
  fruits:[],
  selected:null,
  editFruit:null,
}

function reducer (state = initialState, action) {
  console.log('action', action);

  switch(action.type) {
      case NEW_BUCKETS:
        return { ...state, buckets: action.payload }
      case NEW_FRUITS:
        return { ...state, fruits: action.payload }
      case NEW_SELECTED:
        return { ...state, selected: action.payload }
      case EDIT_FRUIT:
        return { ...state, editFruit: action.payload }
      case NULLIFY_EDIT_FRUIT:
          return { ...state, editFruit:null }
      default:
        return state;
  }      
}

export default reducer;