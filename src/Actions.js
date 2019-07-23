import { fetchBuckets, postFruit, deleteFruit } from './Utilities';

export const NEW_BUCKETS = 'NEW_BUCKETS';
export const NEW_FRUITS = 'NEW_FRUITS';
export const NEW_SELECTED = 'NEW_SELECTED';
export const POST_FRUIT = 'POST_FRUIT';
export const EDIT_FRUIT = 'EDIT_FRUIT';


export function storeBuckets(payload){
  return {
    type:NEW_BUCKETS,
    payload
  }
}

export function storeFruits(payload){
  return {
    type:NEW_FRUITS,
    payload
  }
}

export function storeSelected(payload){
  return {
    type:NEW_SELECTED,
    payload
  }
}

export function storeEditFruit(payload){
  return {
    type:EDIT_FRUIT,
    payload
  }
}

export function deleteFruitAction(id) {
  return ( dispatch, getState ) =>{
    const removeFruit = getState().fruits.filter( each => each._id !== id)

    console.log("fruit to be deleted",id)
    return deleteFruit(id)
      .then( data => {
        dispatch(fetchBucketAction()) 
        dispatch(storeFruits(removeFruit))
      })
  }
}

export function postFruitAction(payload) {
  return ( dispatch, getState ) =>{
    console.log("in post fruit action", payload)
    
    return postFruit(payload)
      .then(
        data =>  {
          dispatch(fetchBucketAction())
          const newFruits = [...getState().fruits, data.data.createFruit]
          dispatch(storeFruits(newFruits));
          // console.log(data)
        },
        error => dispatch(fetchBucketAction())
      )
  }
}

export function fetchBucketAction() {
  return dispatch =>{
    fetchBuckets()
    .then(data => dispatch(storeBuckets(data.data.buckets) ))
    .catch(console.log)
  }
}

export function fetchFruitsAction(bucketID) {
  return (dispatch, getState) =>{
    const { buckets } = getState();
    const found = buckets.find(e => e._id === bucketID);
    dispatch(storeSelected({ id:found._id,title:found.title }));
    dispatch(storeFruits(found.fruits));
  }
}