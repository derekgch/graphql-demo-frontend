import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';


const FruitsContainer = (props) => {
  const generateRows = () =>{
    return props.fruits.map( element => {
      const {_id, description } = element;
      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>{description}</td>
        </tr>
      )
    })
    
  }

  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.fruits ? generateRows() : null}
      </tbody>
    </Table>
      
    </div>
  );
};

export default FruitsContainer;