import { fetchBuckets } from './Utilities';

export const NEW_BUCKETS = 'NEW_BUCKETS';

export function storeBuckets(payload){
  return {
    type:NEW_BUCKETS,
    payload
  }
}

export function fetchBucketAction() {
  return dispatch =>{
    fetchBuckets()
    .then(data => dispatch(storeBuckets(data.data.buckets) ))
    .catch(console.log)
  }
}