import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const BucketContainer = (props) => {
  const generateMenu = () =>{
    return props.buckets.map(element => {
      const { _id, title } = element;
      return <Dropdown.Item  eventKey= {_id} key={_id}> {title}</Dropdown.Item>
    })
  }


  return (
    <div>
      <Dropdown onSelect={ props.handleSelect }>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Bucket List
        </Dropdown.Toggle>

        <Dropdown.Menu >
          {generateMenu()}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default BucketContainer;