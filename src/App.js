import React from 'react';
import logo from './logo.svg';
import BucketContainer from './Components/BucketContainer';
import FruitsContainer from './Components/FruitsContainer';
import { fetchBuckets } from './Utilities';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [buckets, setBuckets] = useState([]);
  const [fruits, setFruits] = useState([]);


  const fetchData = () =>{
    fetchBuckets()
      .then(data => setBuckets(data.data.buckets))
      .catch(console.log)
  }
 
  useEffect( fetchData, [] )

  const handleSelect = (eventKey, event) =>{
    // console.log(eventKey, event.target)
    const foundFruits = buckets.find(e => e._id === eventKey);
    // console.log(foundFruits)
    setFruits(foundFruits.fruits);
  }
  // console.log(buckets)
  return (
    <div className="App">
      <BucketContainer 
        buckets = {buckets}
        handleSelect={handleSelect}
        />
      <FruitsContainer fruits = {fruits}/>
    </div>
  );
}

export default App;
