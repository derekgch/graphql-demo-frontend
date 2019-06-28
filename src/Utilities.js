const BackendUrl = 'http://localhost:3001/graphql'
// Graphql
// Bucket have many Fruits
// POST query : { 
//  "query": "{ buckets { _id title description fruits { _id description} } }"
// }
//

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