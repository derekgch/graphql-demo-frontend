const BackendUrl = 'http://localhost:3001/graphql'
// Graphql
// Bucket have many Fruits
// POST query : 
// { 
//  "query": "{ buckets { _id title description fruits { _id description} } }"
// }
//{
//   "query": "...",
//   "operationName": "...",
//   "variables": { "myVariable": "someValue", ... }
// }
//
// in POSTMAN
// { 
//   "query": "mutation{ createFruit(bucketId:\"5d13db1af37ef199d5042160\", description:\"sdfadf\"){ _id } }"
// }

const generateConfig = (data) =>{
  return {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/JSON',
      'Data-Type': 'application/JSON'
    },
    body: JSON.stringify({query: data})
    }
}

const generateMutationConfig = (data) =>{
  return {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/JSON',
      'Data-Type': 'application/JSON'
    },
    body: JSON.stringify({query: data})
    }
}


export const fetchBuckets = () =>{
  const query = `{ 
        buckets { 
          _id 
          title 
          description 
          fruits { 
            _id 
            description
          } 
        } 
      }`
  
  return fetch(`${BackendUrl}`, generateConfig(query))
          .then(response => response.json())
}

export const postFruit = (data) =>{
  const query = `mutation{
    createFruit(bucketId:"${data.bucketID}", description:"${data.description}"){
      _id
    }
  }`
  return fetch(`${BackendUrl}`, generateMutationConfig(query))
          .then(response => response.json())
}