import { fetchBuckets, postFruit } from './Utilities';

export const NEW_BUCKETS = 'NEW_BUCKETS';
export const NEW_FRUITS = 'NEW_FRUITS';
export const NEW_SELECTED = 'NEW_SELECTED';
export const POST_FRUIT = 'POST_FRUIT';


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

export function postFruitAction(payload) {
  return dispatch =>{
  console.log("in post fruit action", payload)

    postFruit(payload)
      .then(
        data =>  dispatch(fetchBucketAction()),
        error => dispatch(fetchBucketAction())
      )
      .then(
        data => setTimeout(() => {
          dispatch(fetchFruitsAction(payload.bucketID))          
        }, 200)
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