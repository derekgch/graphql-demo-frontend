import React from 'react';
import BucketContainer from './Components/BucketContainer';
import FruitsContainer from './Components/FruitsContainer';
import CreateForm from './Components/CreateForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <BucketContainer 
        />
      <FruitsContainer />

      <CreateForm />
    </div>
  );
}

export default App;
